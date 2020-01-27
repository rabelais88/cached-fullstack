import { gql } from 'apollo-server-express';
const typeDefs = gql`
  scalar Date

  type Post {
    title: String
    content: String
    createdAt: Date
    updatedAt: Date
    authorId: String
  }

  type Query {
    hello: String
    getPosts(cursor: Int, pageSize: Int, keyword: String): [Post]
  }
`;

export default typeDefs;
