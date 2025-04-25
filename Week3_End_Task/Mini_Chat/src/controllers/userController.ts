import { UserCreateParameters, UserGetByParameter, UserUpdateParameters } from './../Dtos/userDtos';
import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/userService';
import AppError from '../errors/appError';

class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async addUserAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameters: UserCreateParameters = req.body;
      if (!parameters.name || !parameters.email) {
        return next(new AppError('Name and email are required', 400, true));
      }

      const result = await this.userService.addUserAsync(parameters);
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json({
        message: 'Add new user =>> done',
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getAllUsersAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.userService.getAllUsersAsync();
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  }

  async getUserByIdAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameter: UserGetByParameter = req.body;
      if (!isNaN(parameter.id)) return next(new AppError('Id must be the number', 400, true));

      const result = await this.userService.getUserByIdAsync(parameter);
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUserAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameter: UserGetByParameter = req.body;
      if (!isNaN(parameter.id)) return next(new AppError('Id must be the number', 400, true));

      const result = await this.userService.deleteUserAsync(parameter);
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json({
        message: 'Delete user ==> done',
      });
    } catch (error) {
      console.error(error);
    }
  }

  async UpdateUserAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameters: UserUpdateParameters = req.body;
      if (!isNaN(parameters.id)) return next(new AppError('Id must be the number', 400, true));
      if (!parameters.name && !parameters)
        return next(new AppError('you must enter at least one field', 400, true));
      const result = await this.userService.updateUserAsync(parameters);
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json({
        message: 'Update user ==> done',
      });
    } catch (error) {
      console.error(error);
    }
  }
}
export default UserController;
