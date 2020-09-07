import { Router, Request, Response, NextFunction } from 'express';

export class TestRoutes {
  readonly router: Router = Router();

  public constructor() {
    this.initRoutes();
  }
  initRoutes() {
    this.router.get(
      '/get',
      (req: Request, res: Response, next: NextFunction) => {
        res.json('Test API');
      }
    );
  }
}
