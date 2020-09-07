import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express';
import cors from 'cors';
import { api } from '@config/globals';

const expressLoader = ({ app }: { app: express.Application }) => {
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Error 404
  // app.use((req: Request, res: Response, next: NextFunction) => {
  //   const err = new Error('Not Found');
  //   err.status = 404;
  //   next(err);
  // });
  //Error handler

  // app.use((err:ErrorRequestHandler,req:Request,res:Response,next:NextFunction)=>{
  //   res.status(err.status)
  // })

  // app.use(api.prefix,)
};
export { expressLoader };
