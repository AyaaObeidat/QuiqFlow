import User from '../models/user';
import { GenericRepository } from './GenericRepository';
import Message from '../models/message';
import Room from '../models/room';

export class UserRepository extends GenericRepository<User> {
  constructor() {
    super(User);
  }

  async getAllAsync(): Promise<User[]> {
    try {
      return await User.findAll({
        include: [
          {
            model: Message,
            as: 'messages',
          },
          {
            model: Room,
            as: 'rooms',
            through: { attributes: [] },
          },
        ],
      });
    } catch (error) {
      console.error('Error in UserRepository.getAllAsync:', error);
      throw error;
    }
  }

  async getByIdAsync(id: number): Promise<User | null> {
    try {
      return await User.findByPk(id, {
        include: [
          {
            model: Message,
            as: 'messages',
          },
          {
            model: Room,
            as: 'rooms',
            through: { attributes: [] },
          },
        ],
      });
    } catch (error) {
      console.error('Error in UserRepository.getByIdAsync:', error);
      throw error;
    }
  }
}
