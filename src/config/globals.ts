export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  NODE_PORT: process.env.NODE_PORT || process.env.PORT || 3000,
  // port: process.env.SERVER_PORT || '',
  // host: process.env.SERVER_HOST || '',
};
export const api = {
  prefix: '/api',
};
