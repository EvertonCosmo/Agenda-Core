import { Router } from 'express';
import { api } from '@config/globals';
import { TestRoutes } from './test/routes';

export function registerGlobalRoutes(router: Router) {
  const { prefix } = api;
  router.use(`${prefix}/test`, new TestRoutes().router);
}
