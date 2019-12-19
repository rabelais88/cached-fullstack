import { app } from '../src/entry';
import request from 'supertest';
import { expect } from 'chai';
import {} from 'mocha'; // for type definitions

const agent = request.agent(app);

describe('ping-pong', () => {
  it('/ping', async () => {
    const res = await agent.get('/ping').expect(200);
    expect(res.body).to.eql({ pong: 'ok' });
    // console.log(res.body);
  });
});
