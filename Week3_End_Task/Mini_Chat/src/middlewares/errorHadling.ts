import { ErrorRequestHandler } from 'express';
import AppError from '../errors/appError';

const errorHandler: ErrorRequestHandler = async (err, req, res): Promise<void> => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.log('Unexpected error ... ');
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong on server',
  });
};
export default errorHandler;
