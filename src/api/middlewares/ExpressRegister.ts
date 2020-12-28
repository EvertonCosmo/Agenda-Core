import { Router, json, Request, Response, NextFunction } from 'express';
import { env } from '@config/globals';
import { logger } from '@config/logger';
import { UtilService } from '@services/util/utilService';
import cors from 'cors';
export const expressRegister = (router: Router): void => {
  if (env.NODE_ENV === 'development') {
    router.use(cors({ origin: '*' }));
  }

  router.use(json());

  // log incoming requests

  router.use((req: Request, res: Response, next: NextFunction) => {
    if (env.NODE_ENV === 'development') {
      const ip: string | string[] | undefined =
        req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      logger.log({
        isRequest: true,
        level: 'info',
        message: `${req.method} ${req.url} from ${ip}`,
      });
    }
    return next();
  });

  // TODO
  /**
   * Init authentication strategies here
   */
};

//  Handler error server
export const expressErrorHandler = (router: Router): Response | void => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    UtilService.handleError(err); // show log
    return res.status(500).json({
      error: err.message || err,
      status: 500,
    });
  });
};
