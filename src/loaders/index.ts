import { expressLoader } from './express';
import { logger } from '@config/logger';
import express from 'express';
import { IExpressApp } from '../../types';

export default async ({ expressApp }: IExpressApp) => {
  //TODO
  /**
   *
   * Add new modules
   */
  await expressLoader({ app: expressApp });
  logger.info('Express Loaded');
};
