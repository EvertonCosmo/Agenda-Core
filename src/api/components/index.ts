import { Router } from 'express';
import { registerGlobalRoutes } from './global/routes';

export function ComponentRoutes(router: Router) {
  registerGlobalRoutes(router);
}
