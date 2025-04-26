import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/appError';
import { MessageService } from '../services/messageService';
import {
  MessageCreateParameters,
  MessageGetByParameter,
  MessageUpdateParameters,
} from '../Dtos/messageDtos';

export class MessageController {
  private readonly messageService: MessageService;
  constructor() {
    this.messageService = new MessageService();
  }

  public async addMessageAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameters: MessageCreateParameters = req.body;
      if (!parameters.content || !parameters.roomId || !parameters.userId)
        return next(new AppError('Message content, userId, and roomId are required.', 400, true));

      const result = await this.messageService.addMessageAsync(parameters);
      if (typeof result === 'string') return next(new AppError(result, 400, true));

      res.status(200).json({
        message: 'Message added successfully.',
      });
    } catch (error) {
      next(error);
    }
  }

  public async getAllMessagesAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.messageService.getAllMessagesAsync();
      if (typeof result === 'string') return next(new AppError(result, 400, true));

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public async getMessageByIdAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameter: MessageGetByParameter = req.body;
      if (isNaN(Number(parameter.id)))
        return next(new AppError('Id must be a valid number.', 400, true));

      const result = await this.messageService.getMessageByIdAsync(parameter);
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public async deleteMessageAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameter: MessageGetByParameter = req.body;
      if (isNaN(Number(parameter.id)))
        return next(new AppError('Id must be a valid number.', 400, true));

      const result = await this.messageService.deleteMessageAsync(parameter);
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json({
        message: 'Message deleted successfully.',
      });
    } catch (error) {
      next(error);
    }
  }

  public async updateMessageAsync(req: Request, res: Response, next: NextFunction) {
    try {
      const parameter: MessageUpdateParameters = req.body;
      if (isNaN(Number(parameter.id)))
        return next(new AppError('Id must be a valid number.', 400, true));

      const result = await this.messageService.UpdateMessageAsync(parameter);
      if (typeof result === 'string') return next(new AppError(result, 400, true));
      res.status(200).json({
        message: 'Message updated successfully.',
      });
    } catch (error) {
      next(error);
    }
  }
}
