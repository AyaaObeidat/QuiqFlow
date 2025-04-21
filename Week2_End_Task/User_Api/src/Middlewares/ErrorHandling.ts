import { ErrorRequestHandler, Request, Response } from 'express';
import AppError from '@/Errors/AppError';

const errorHandlier: ErrorRequestHandler = (err: Error, _req: Request, res: Response) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'something went wrong on the server!',
    });
  }
};
export default errorHandlier;
