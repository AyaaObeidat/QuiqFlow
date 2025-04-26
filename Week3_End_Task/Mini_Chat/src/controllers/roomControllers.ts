import { NextFunction, Request, Response } from 'express';
import { RoomService } from '../services/roomService';
import { RoomCreateParameters, RoomGetByParameter, RoomUpdateParameters } from '../Dtos/roomDtos';
import AppError from '../errors/appError';

export class RoomController {
  private readonly roomService: RoomService;
  constructor() {
    this.roomService = new RoomService();
  }

  public async addUserAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameters: RoomCreateParameters = req.body;
      if (!parameters.name) return next(new AppError('Room name is required', 400, true));

      const result = await this.roomService.addRoomAsync(parameters);
      if (typeof result === 'string') return next(new AppError(result, 400, true));

      res.status(200).json({
        message: 'Room added successfully.',
      });
    } catch (error) {
      next(error);
    }
  }

  public async getAllRoomsAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.roomService.getAllRoomsAsync();
      if (typeof result === 'string') return next(new AppError(result, 400, true));

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public async getRoomByIdAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameter: RoomGetByParameter = req.body;
      if (isNaN(Number(parameter.id)))
        return next(new AppError('Id must be the number', 400, true));

      const result = await this.roomService.getRoomByIdAsync(parameter);
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public async deleteRoomAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameter: RoomGetByParameter = req.body;
      if (isNaN(Number(parameter.id)))
        return next(new AppError('Id must be the number', 400, true));

      const result = await this.roomService.deleteRoomAsync(parameter);
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json({
        message: 'Room deleted successfully.',
      });
    } catch (error) {
      next(error);
    }
  }

  public async updateRoomAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameter: RoomUpdateParameters = req.body;
      if (isNaN(Number(parameter.id)))
        return next(new AppError('Id must be the number', 400, true));

      const result = await this.roomService.UpdateRoomAsync(parameter);
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json({
        message: 'Room updated successfully.',
      });
    } catch (error) {
      next(error);
    }
  }
}
