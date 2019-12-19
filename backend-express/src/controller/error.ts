import { Request, Response, NextFunction } from 'express';
import { CustomError, ErrorResponse } from '../types/error-type';

const logger = (...arg: any[]): void =>
  console.error('controller/error:', ...arg);

function errorHandler(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!err) return res.status(500).json({ code: 'ERROR_UNDEFINED' }); // this shouldn't appear in any case
  const errorData: ErrorResponse = {
    code: err.code || 'NO_CODE',
    message: err.message || 'no message',
    statusCode: err.statusCode || 500,
    data: err.data,
  };
  res.status(err.statusCode).json(errorData);
  logger(err);
}

export default errorHandler;
