import { expect } from 'chai';
import httpStatusCodes from 'http-status-codes';
import supertest from 'supertest';
import environment from '../environment';
import system from '../../src/system';

const { start } = environment;

describe('Example test', () => {
  let request;

  before(async () => {
    const { app } = await start();
    request = supertest(app);
  });

  after((done) => {
    system.stop(done);
  });

  it('should return some data on the example endpoint', async () => {
    const { body } = await request
      .get('/api/example')
      .expect(httpStatusCodes.OK);
    expect(body).to.have.property('test');
  })
});
