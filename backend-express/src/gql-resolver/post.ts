import Post from '../model/post';

const logger = (...args) => console.log('gql-resolver/post.ts ->', ...args);

const postResolver = {
  Query: {
    async getPosts(root, args, context) {
      const posts = await Post.find().limit(10);
      logger('getPosts', root, args, context);
      return posts;
    },
  },
};

export default postResolver;
