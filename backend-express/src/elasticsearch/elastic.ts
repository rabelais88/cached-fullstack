import { Client } from '@elastic/elasticsearch';
import { isProduction, PORT_ELASTIC_SEARCH } from '../env';

const client = isProduction
  ? new Client({ node: `http://localhost:${PORT_ELASTIC_SEARCH}` })
  : null;

export default client;
