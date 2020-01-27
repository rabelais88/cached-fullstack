import express from 'express';
import realRedis from 'redis';
import mockRedis from 'redis-mock'; // for testing
import mongoose from 'mongoose';
import morgan from 'morgan';
import { ApolloServer as _ApolloServer } from 'apollo-server-express';
import typeDefs from './gql-schema/root';
import resolvers from './gql-resolver/root';

// local import
import router from './router';
import errorHandler from './controller/error';
import { PORT, REDIS_URL, MONGO_URI, isTest, isDevelopment } from './env';

export const app = express();
const Redis = isTest ? mockRedis : realRedis;

const optsRedis = {
  // redis options
  // check below for more info
  // https://github.com/NodeRedis/node_redis#rediscreateclient
  url: REDIS_URL,
};

const logger = (...arg: any[]): void => console.log('APP-entry:', ...arg);

let morganOpt = 'tiny';
if (isDevelopment || isTest) {
  morganOpt = 'dev';
}
app.use(morgan(morganOpt));
app.use(router);
app.use(errorHandler);

const ApolloServer = new _ApolloServer({ typeDefs, resolvers });
ApolloServer.applyMiddleware({ app });

//   rds.set('string key', 'string val', Redis.print);

function onListen() {
  logger(`LISTENING TO ${PORT}`);
  logger(`GRAPHQL: :${PORT}${ApolloServer.graphqlPath}`);
}

// flow:
// 1. _main
// 2. mongo connection
// 3. redis connection
// 4. app listening

function onRedisConnect() {
  logger('REDIS CONNECTED');
  app.listen(PORT, onListen);
}

function onMongooseConnect() {
  logger('MONGOOSE CONNECTED');
  const redisClient = Redis.createClient(optsRedis);

  redisClient.on('error', err => {
    logger('REDIS ERROR', err);
    process.exit(1);
  });

  redisClient.on('connect', onRedisConnect);
}

mongoose.connection.on('connected', onMongooseConnect);
mongoose.connection.on('error', err => {
  logger('MONGOOSE ERROR', err);
  process.exit(1);
});

async function _main() {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}

process.on('uncaughtException', err => {
  logger('UNCAUGHT ERROR', err);
  process.exit(1); //mandatory (as per the Node docs)
});

if (!isTest) _main();
