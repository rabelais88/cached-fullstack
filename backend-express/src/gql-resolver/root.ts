import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import _merge from 'lodash/merge';
import postResolver from './post';

const rootResolver = {
  Query: {
    hello: () => 'Hello World!',
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue: value => new Date(value),
    serialize: value => value.getTime(),
    parseLiteral: ast => {
      if (ast.kind === Kind.INT) return new Date(ast.value);
      return null;
    },
  }),
};

export default _merge(rootResolver, postResolver);
