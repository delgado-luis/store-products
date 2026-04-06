import type { Request, Response, NextFunction } from 'express';
import { type ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

interface ValidationOptions {
  body?: ClassConstructor<any>;
  query?: ClassConstructor<any>;
  params?: ClassConstructor<any>;
}

const targetProperties = {
  body: 'bodyDto',
  query: 'queryDto',
  params: 'paramsDto',
} as const;

export function validationPipe(options: ValidationOptions) {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (const key of Object.keys(options) as (keyof ValidationOptions)[]) {
      const classDto = options[key];
      if (!classDto) continue;

      const dtoInstance = plainToInstance(classDto, req[key] || {});

      const errors = await validate(dtoInstance, {
        whitelist: true,
        forbidNonWhitelisted: true,
      });

      if (errors.length > 0) {
        const messages = errors.flatMap((e) =>
          e.constraints ? Object.values(e.constraints) : [],
        );

        return res.status(400).json({ errors: messages });
      }

      req[targetProperties[key]] = dtoInstance;
    }

    next();
  };
}
