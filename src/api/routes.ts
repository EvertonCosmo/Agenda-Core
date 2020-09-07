import { Router } from 'express';
import { logger } from '@config/logger';
import {
  expressRegister,
  expressErrorHandler,
} from './middlewares/ExpressRegister';
import { ComponentRoutes } from './components';

export function registerApiRoutes(router: Router) {
  expressRegister(router);
  ComponentRoutes(router);
  expressErrorHandler(router);
}
