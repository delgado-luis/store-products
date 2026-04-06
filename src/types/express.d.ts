import 'express';

export declare global {
  namespace Express {
    interface Request {
      bodyDto?: any;
      queryDto?: any;
      paramsDto?: any;
    }
  }
}
