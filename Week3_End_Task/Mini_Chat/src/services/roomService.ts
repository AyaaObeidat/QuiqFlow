import { RoomCreateParameters, RoomGetByParameter, RoomUpdateParameters } from '../Dtos/roomDtos';
import Room from '../models/room';
import { RoomRepository } from '../repositories/roomRepository';

export class RoomService {
  private readonly roomRepository: RoomRepository;

  constructor() {
    this.roomRepository = new RoomRepository();
  }

  public async addRoomAsync(parameters: RoomCreateParameters): Promise<string | null> {
    try {
      const rooms = await this.roomRepository.getAllAsync();
      const roomsChecked = rooms.filter((r) => r.name === parameters.name);
      if (roomsChecked.length > 0) return 'Room already exists';

      await this.roomRepository.addAsync(parameters);
      return null;
    } catch (error) {
      console.error('Error in RoomService.addRoomAsync:', error);
      throw error;
    }
  }

  public async getAllRoomsAsync(): Promise<string | Room[]> {
    try {
      const rooms = await this.roomRepository.getAllAsync();
      if (rooms.length === 0) return 'No rooms found';

      return rooms;
    } catch (error) {
      console.error('Error in RoomService.getAllRoomsAsync:', error);
      throw error;
    }
  }

  public async getRoomByIdAsync(parameter: RoomGetByParameter): Promise<string | Room> {
    try {
      const room = await this.roomRepository.getByIdAsync(parameter.id);
      if (room === null) return 'Room not found';

      return room;
    } catch (error) {
      console.error('Error in RoomService.getRoomByIdAsync:', error);
      throw error;
    }
  }

  public async deleteRoomAsync(parameter: RoomGetByParameter): Promise<string | null> {
    try {
      const room = await this.roomRepository.getByIdAsync(parameter.id);
      if (room === null) return 'Room not found';

      await this.roomRepository.deleteAsync(room);
      return null;
    } catch (error) {
      console.error('Error in RoomService.deleteRoomAsync:', error);
      throw error;
    }
  }

  public async UpdateRoomAsync(parameters: RoomUpdateParameters): Promise<string | null> {
    try {
      const room = await this.roomRepository.getByIdAsync(parameters.id);
      if (room === null) return 'Room not found';

      room.name = parameters.name || room.name;
      await this.roomRepository.updateAsync(room);
      return null;
    } catch (error) {
      console.error('Error in RoomService.UpdateRoomAsync:', error);
      throw error;
    }
  }
}
