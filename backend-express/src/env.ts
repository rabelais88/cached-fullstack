// using separate env to avoid dependency chaining
export const PORT = process.env.PORT || 4000;
export const PORT_ELASTIC_SEARCH = process.env.PROT_ELASTIC_SEARCH || 9200;
export const { NODE_ENV, REDIS_URL, MONGO_URI } = process.env;
export const ENV_MODE = {
  DEV: 'development',
  TEST: 'test',
};
export const isProduction = ![ENV_MODE.DEV, ENV_MODE.TEST].includes(NODE_ENV);
export const isTest =  NODE_ENV === ENV_MODE.TEST
export const isDevelopment =  NODE_ENV === ENV_MODE.DEV