import { v1 } from 'uuid';
import { logger } from '@config/logger';
export class UtilService {
  public static handleError(err: any) {
    logger.error(err.stack || err);
  }
  public static generateUuid() {
    return v1();
  }
}
