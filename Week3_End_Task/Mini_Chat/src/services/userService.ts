import { UserCreateParameters, UserGetByParameter, UserUpdateParameters } from '../Dtos/userDtos';
import User from '../models/user';
import { UserRepository } from '../repositories/userRepository';

export class UserService {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async addUserAsync(parameters: UserCreateParameters): Promise<string | null> {
    const users = await this.userRepository.getAllAsync();
    const usersChecked = users.filter(
      (u) => u.name === parameters.name && u.email === parameters.email
    );
    if (usersChecked.length > 0) return 'this user already exist';

    await this.userRepository.addAsync(parameters);
    return null;
  }

  public async getAllUsersAsync(): Promise<string | User[]> {
    const users = await this.userRepository.getAllAsync();
    if (users.length === 0) return 'Not users found';
    return users;
  }

  public async getUserByIdAsync(parameter: UserGetByParameter): Promise<string | User> {
    const user = await this.userRepository.getByIdAsync(parameter.id);
    if (user === null) return 'Not user found';
    return user;
  }

  public async deleteUserAsync(parameter: UserGetByParameter): Promise<string | null> {
    const user = await this.userRepository.getByIdAsync(parameter.id);
    if (user === null) return 'Not user found';
    await this.userRepository.deleteAsync(user);
    return null;
  }

  public async updateUserAsync(parameters: UserUpdateParameters): Promise<string | null> {
    const user = await this.userRepository.getByIdAsync(parameters.id);
    if (user === null) return 'Not user found';
    user.name = parameters.name || user.name;
    user.email = parameters.email || user.email;
    await this.userRepository.updateAsync(user);
    return null;
  }
}
