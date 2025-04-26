import { UserCreateParameters, UserGetByParameter, UserUpdateParameters } from '../Dtos/userDtos';
import User from '../models/user';
import { UserRepository } from '../repositories/userRepository';

export class UserService {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async addUserAsync(parameters: UserCreateParameters): Promise<string | null> {
    try {
      const users = await this.userRepository.getAllAsync();
      const usersChecked = users.filter(
        (u) => u.name === parameters.name && u.email === parameters.email
      );
      if (usersChecked.length > 0) return 'User already exists';

      await this.userRepository.addAsync(parameters);
      return null;
    } catch (error) {
      console.error('Error in UserService.addUserAsync:', error);
      throw error;
    }
  }

  public async getAllUsersAsync(): Promise<string | User[]> {
    try {
      const users = await this.userRepository.getAllAsync();
      if (users.length === 0) return 'No users found';

      return users;
    } catch (error) {
      console.error('Error in UserService.getAllUsersAsync:', error);
      throw error;
    }
  }

  public async getUserByIdAsync(parameter: UserGetByParameter): Promise<string | User> {
    try {
      const user = await this.userRepository.getByIdAsync(parameter.id);
      if (user === null) return 'User not found';

      return user;
    } catch (error) {
      console.error('Error in UserService.getUserByIdAsync:', error);
      throw error;
    }
  }

  public async deleteUserAsync(parameter: UserGetByParameter): Promise<string | null> {
    try {
      const user = await this.userRepository.getByIdAsync(parameter.id);
      if (user === null) return 'User not found';

      await this.userRepository.deleteAsync(user);
      return null;
    } catch (error) {
      console.error('Error in UserService.deleteUserAsync:', error);
      throw error;
    }
  }

  public async updateUserAsync(parameters: UserUpdateParameters): Promise<string | null> {
    try {
      const user = await this.userRepository.getByIdAsync(parameters.id);
      if (user === null) return 'User not found';

      user.name = parameters.name || user.name;
      user.email = parameters.email || user.email;
      await this.userRepository.updateAsync(user);
      return null;
    } catch (error) {
      console.error('Error in UserService.updateUserAsync:', error);
      throw error;
    }
  }
}
