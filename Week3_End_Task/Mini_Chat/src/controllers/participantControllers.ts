import { ParticipantCreateParameters, ParticipantGetByParameter } from './../Dtos/participantDtos';
import { ParticipantService } from './../services/participantService';
import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/appError';
export class ParticipantController {
  private readonly participantService: ParticipantService;
  constructor() {
    this.participantService = new ParticipantService();
  }

  public async addParticipantAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameters: ParticipantCreateParameters = req.body;
      if (isNaN(parameters.userId) || isNaN(parameters.roomId))
        return next(new AppError('Id must be a valid number.', 400, true));
      if (!parameters.roomId || !parameters.userId)
        return next(new AppError('User id and room id are required', 400, true));

      const result = await this.participantService.addParticipantAsync(parameters);
      if (typeof result === 'string') return next(new AppError(result, 400, true));

      res.status(200).json({
        message: 'Participant added successfully.',
      });
    } catch (error) {
      next(error);
    }
  }

  public async getAllParticipantsAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.participantService.getAllParticipantsAsync();
      if (typeof result === 'string') return next(new AppError(result, 400, true));

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public async getParticipantByIdAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameter: ParticipantGetByParameter = req.body;
      if (isNaN(parameter.id)) return next(new AppError('Id must be the number', 400, true));

      const result = await this.participantService.getParticipantByIdAsync(parameter);
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public async deleteParticipantAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameter: ParticipantGetByParameter = req.body;
      if (isNaN(parameter.id)) return next(new AppError('Id must be the number', 400, true));

      const result = await this.participantService.deleteParticipantAsync(parameter);
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json({
        message: 'Participant deleted successfully.',
      });
    } catch (error) {
      next(error);
    }
  }
}
