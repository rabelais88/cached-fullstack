import { app } from '../src/entry';
import request from 'supertest';
import { expect } from 'chai';
import {} from 'mocha'; // for type definitions
import { MongoMemoryServer } from 'mongodb-memory-server';
import Mongoose from 'mongoose';
import Post from '../src/model/post'

let mongoServer;

before(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getUri();
  await Mongoose.connect(mongoUri);
});

after(async () => {
  await Mongoose.disconnect();
  await mongoServer.stop();
})

describe('test post model', () => {
  it('find()', async () => {
    await new Post({ title: 'abcd', authorId: '123', content: '123abc' }).save();
    const cnt = await Post.countDocuments()
    expect(cnt).to.eql(1)
  })
})