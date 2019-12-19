// using separate env to avoid dependency chaining
export const PORT = process.env.PORT || 4000;
export const { NODE_ENV, REDIS_URL, MONGO_URI } = process.env;
