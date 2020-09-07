import winston, { createLogger } from 'winston';

const transports: winston.transport[] = [];

process.env.NODE_ENV !== 'development'
  ? createSingleTransport()
  : createMultipleTransports();

function createSingleTransport() {
  transports.push(new winston.transports.Console());
}
function createMultipleTransports() {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat()
      ),
    })
  );
}
const logger = createLogger({
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss',
    }),
    winston.format.errors({ stacks: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports,
});
export { logger };
