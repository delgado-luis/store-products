import type { Request, Response, NextFunction } from 'express';
import { CustomError } from '../common/errors/custom.error.ts';

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  return res.status(500).json({ error: 'Internal server error' });
};
