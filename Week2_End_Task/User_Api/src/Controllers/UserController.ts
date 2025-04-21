import { NextFunction, Request, Response } from 'express';
import { User, UserRequestStatus } from '@/_Models/UserModel';
import AppError from '@/Errors/AppError';

export class UserController {
  private idCounter: number;

  constructor(private users: User[]) {
    this.idCounter = users.length;
  }

  getAllUsers = async (req: Request, res: Response) => {
    res.json(this.users);
  };

  getPendingUsers = async (req: Request, res: Response) => {
    const pending = this.users.filter((u) => u.userRequest === UserRequestStatus.PENDING);
    res.status(200).json(pending);
  };

  getApprovedUsers = async (req: Request, res: Response) => {
    const approved = this.users.filter((u) => u.userRequest === UserRequestStatus.APPROVED);
    res.status(200).json(approved);
  };

  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      if (isNaN(id)) return next(new AppError('user id must be a number.', 400, true));

      const user = this.users.find((u) => u.id === id);
      if (!user) return next(new AppError('user not found.', 404, true));

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      if (isNaN(id)) return next(new AppError('user id must be a number.', 400, true));

      const user = this.users.find((u) => u.id === id);
      if (!user) return next(new AppError('user not found.', 404, true));

      if (user.userRequest === UserRequestStatus.APPROVED) {
        res.status(200).json({ name: user.name, email: user.email });
      } else {
        return next(new AppError('Login not allowed: your request is still pending.', 400, true));
      }
    } catch (error) {
      next(error);
    }
  };

  addUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password)
        return next(new AppError('name, email and password are required', 400, true));

      const newUser: User = {
        id: ++this.idCounter,
        name,
        email,
        password,
        userRequest: UserRequestStatus.PENDING,
      };

      this.users.push(newUser);
      res.status(200).json(newUser);
    } catch (error) {
      next(error);
    }
  };

  updateUserRequestStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      if (isNaN(id)) return next(new AppError('user id must be a number.', 400, true));

      const user = this.users.find((u) => u.id === id);
      if (!user) return next(new AppError('user not found.', 404, true));

      if (user.userRequest === UserRequestStatus.PENDING) {
        user.userRequest = UserRequestStatus.APPROVED;
        res.status(200).json(user);
      } else {
        return next(new AppError('this user already approved.', 400, true));
      }
    } catch (error) {
      next(error);
    }
  };

  updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, name, email, password } = req.body;
      if (isNaN(id)) return next(new AppError('user id must be a number.', 400, true));

      const user = this.users.find((u) => u.id === id);
      if (!user) return next(new AppError('user not found.', 404, true));

      if (!name && !email && !password)
        return next(new AppError('enter at least one field', 400, true));

      user.name = name ?? user.name;
      user.email = email ?? user.email;
      user.password = password ?? user.password;

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      if (isNaN(id)) return next(new AppError('user id must be a number.', 400, true));

      const index = this.users.findIndex((u) => u.id === id);
      if (index === -1) return next(new AppError('user not found.', 404, true));

      this.users.splice(index, 1);
      res.status(200).json(this.users);
    } catch (error) {
      next(error);
    }
  };
}
