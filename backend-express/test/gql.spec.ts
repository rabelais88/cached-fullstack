import { app } from '../src/entry';
import request from 'supertest';
import { expect } from 'chai';
import {} from 'mocha'; // for type definitions

const agent = request.agent(app);

describe('graphql', () => {  
  it('basic graphql connectivity', async () => {
    const req = await agent
      .post('/graphql')
      .send({ query: '{ hello }' })
      .expect(200);
    expect(req.body.data.hello).to.eql('Hello World!');
  });

  it('fetching basic post lists', async () => {

    const testQuery = `{
      getPosts(pageSize: 10, limit: 10, cursor: 0) {
        title
      }
    }`

    const req = await agent
      .post('/graphql')
      .send({ query: testQuery })
      .expect(200);
    console.log(req.body.data);
  });
});
