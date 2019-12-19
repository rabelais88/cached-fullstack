import { app } from '../src/entry';
import request from 'supertest';
import { expect } from 'chai';
import {} from 'mocha'; // for type definitions

const agent = request.agent(app);

describe('post', () => {
  it('/posts', async () => {
    const res = await agent.get('/posts?page=-1').expect(422);
    console.log(res.body)
  });
});
