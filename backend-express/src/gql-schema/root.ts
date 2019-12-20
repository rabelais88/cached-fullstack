import { buildSchema } from "graphql";

// https://graphql.org/graphql-js/constructing-types/
export default buildSchema(`
  type Query {
    hello: String
  }
`);