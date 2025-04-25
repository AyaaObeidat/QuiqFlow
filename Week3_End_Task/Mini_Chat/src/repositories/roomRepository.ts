import Message from '../models/message';
import Room from '../models/room';
import User from '../models/user';
import { GenericRepository } from './GenericRepository';

export class RoomRepository extends GenericRepository<Room> {
  constructor() {
    super(Room);
  }

  async getAllAsync(): Promise<Room[]> {
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
  }
  async getByIdAsync(id: number): Promise<Room | null> {
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
  }
}
