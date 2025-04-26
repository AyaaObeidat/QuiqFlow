import Message from '../models/message';
import Room from '../models/room';
import User from '../models/user';
import { GenericRepository } from './GenericRepository';

export class RoomRepository extends GenericRepository<Room> {
  constructor() {
    super(Room);
  }

  async getAllAsync(): Promise<Room[]> {
    try {
      return await Room.findAll({
        include: [
          {
            model: Message,
            as: 'messages',
          },
          {
            model: User,
            as: 'users',
            through: { attributes: [] },
          },
        ],
      });
    } catch (error) {
      console.error('Error in RoomRepository.getAllAsync:', error);
      throw error;
    }
  }

  async getByIdAsync(id: number): Promise<Room | null> {
    try {
      return await Room.findByPk(id, {
        include: [
          {
            model: Message,
            as: 'messages',
          },
          {
            model: User,
            as: 'users',
            through: { attributes: [] },
          },
        ],
      });
    } catch (error) {
      console.error('Error in RoomRepository.getByIdAsync:', error);
      throw error;
    }
  }
}
