import { NextFunction, Request, Response } from 'express';
import { User, UserRequestStatus, users } from '../_Models/UserModel';
import AppError from '../Errors/AppError';

let idCounter: number = users.length;

export async function getAllUsers(req: Request, res: Response) {
  res.json(users);
}

export async function getPendingUsers(req: Request, res: Response) {
  const pendingUsers: User[] = users.filter((u) => u.userRequest === UserRequestStatus.PENDING);
  res.status(200).json(pendingUsers);
}

export async function getApprovedUsers(req: Request, res: Response) {
  const pendingUsers: User[] = users.filter((u) => u.userRequest === UserRequestStatus.APPROVED);
  res.status(200).json(pendingUsers);
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.body;
    if (isNaN(id)) return next(new AppError('user id must be a number.', 400, true));
    const user = users.find((u) => u.id === id);
    if (!user) return next(new AppError('user not found.', 404, true));
    if (user.userRequest === UserRequestStatus.APPROVED) {
      res.status(200).json({
        name: user.name,
        email: user.email,
      });
    } else {
      return next(new AppError('Login not allowed: your request is still pending.', 400, true));
    }
  } catch (error) {
    next(error);
  }
}

export async function getUserById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.body;
    if (isNaN(id)) return next(new AppError('user id must be a number.', 400, true));
    const user = users.find((u) => u.id === id);
    if (!user) return next(new AppError('user not found.', 404, true));
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export async function addUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return next(new AppError('name,email and password are required', 400, true));
    const user: User = {
      id: ++idCounter,
      name: name,
      email: email,
      password: password,
      userRequest: UserRequestStatus.PENDING,
    };
    users.push(user);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export async function updateUserRequestStatus(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.body;
    if (isNaN(id)) return next(new AppError('user id must be a number.', 400, true));
    const user = users.find((u) => u.id === id);
    if (!user) return next(new AppError('user not found.', 404, true));
    if (user.userRequest === UserRequestStatus.PENDING) {
      user.userRequest = UserRequestStatus.APPROVED;
      res.status(200).json(user);
    } else return next(new AppError('this user already approved.', 400, true));
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.body;
    if (isNaN(id)) return next(new AppError('user id must be a number.', 400, true));
    const user = users.find((u) => u.id === id);
    if (!user) return next(new AppError('user not found.', 404, true));
    if (user.userRequest === UserRequestStatus.PENDING) {
      user.userRequest = UserRequestStatus.APPROVED;
      res.status(200);
    } else return next(new AppError('this user already approved.', 400, true));
  } catch (error) {
    next(error);
  }
}

export async function UpdateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { id, name, email, password } = req.body;
    if (isNaN(id)) return next(new AppError('user id must be a number.', 400, true));
    const user = users.find((u) => u.id === id);
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
}
