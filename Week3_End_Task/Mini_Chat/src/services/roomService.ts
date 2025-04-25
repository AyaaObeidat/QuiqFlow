import { RoomCreateParameters, RoomGetByParameter, RoomUpdateParameters } from "../Dtos/roomDtos";
import Room from "../models/room";
import { RoomRepository } from "../repositories/roomRepository";

export class RoomService{
    private readonly roomRepository:RoomRepository;
    constructor(){
        this.roomRepository = new RoomRepository();
    }

    public async addRoomAsync(parameters:RoomCreateParameters):Promise<string|null>{
        const rooms = await this.roomRepository.getAllAsync();
        const roomsChecked = rooms.filter(r => r.name === parameters.name);
        if(roomsChecked.length > 0) return 'This room already exist';

        await this.roomRepository.addAsync(parameters);
        return null;
    }

    public async getAllRoomsAsync():Promise<string|Room[]>{
        const rooms = await this.roomRepository.getAllAsync();
        if(rooms.length === 0) return 'Not found rooms';

        return await this.roomRepository.getAllAsync();
    }

    public async getRoomByIdAsync(parameter:RoomGetByParameter):Promise<string|Room>{
        if(!isNaN(parameter.id)) return 'Id must be the number';

        const room = await this.roomRepository.getByIdAsync(parameter.id) ;
        if(room === null) return 'room not found';
        return room;
    }

    public async deleteRoomAsync(parameter:RoomGetByParameter):Promise<string|null>{
        if(!isNaN(parameter.id)) return 'Id must be the number';

        const room = await this.roomRepository.getByIdAsync(parameter.id) ;
        if(room === null) return 'room not found';

        await this.roomRepository.deleteAsync(room);
        return null;
    }

    public async UpdateRoomAsync(parameters:RoomUpdateParameters):Promise<string|null>{
        if(!isNaN(parameters.id)) return 'Id must be the number';

        const room = await this.roomRepository.getByIdAsync(parameters.id) ;
        if(room === null) return 'room not found';

        room.name = parameters.name || room.name;
        await this.roomRepository.updateAsync(room);
        return null;
    }
}