import 'module-alias/register';

import { config } from 'dotenv';
import express from 'express';
import { Server, createServer } from 'http';
import { env } from '@config/globals';
import { logger } from '@config/logger';
import { ExpressServer } from './server/express';
config();

(async function main() {
  try {
    logger.info('Initializing... ');
    const app: express.Application = new ExpressServer().app;
    const server: Server = createServer(app);
    // start
    server.listen(env.NODE_PORT);

    server.on('listening', () => {
      logger.info(`server started at port ${env.NODE_PORT}`);
    });
    server.on('close', () => {
      logger.info('server closed');
    });
    // await require('./loaders').default({ expressApp: app });
  } catch (err) {
    logger.error(err.stack);
  }
})();
