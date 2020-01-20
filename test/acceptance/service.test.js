import { expect } from 'chai';
import httpStatusCodes from 'http-status-codes';
import supertest from 'supertest';
import environment from '../environment';
import system from '../../src/system';

console.log(environment);
const { insertTodo } = environment;


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

  it('should return an empty array if there are no todos', async () => {
    const { body } = await request
      .get('/api/todos')
      .expect(httpStatusCodes.OK);

    expect(body).to.have.all.keys('todos');
    expect(body.todos.length).to.equal(0);
  });

  it('should return some data on the example endpoint', async () => {
    console.log(insertTodo);
    insertTodo({ name: 'name of the todo ' });
    const { body } = await request
      .get('/api/todos')
      .expect(httpStatusCodes.OK);
    expect(body.todos[0].name).to.equal('name of the todo');
  });
});
