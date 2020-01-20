import system from '../src/system';

let insertTodo;
const start = async () => {
  if (process.env.NODE_ENV !== 'test') {
    return Promise.reject(new Error('You must run these in NODE_ENV=test'));
  }
  const context = await system.start();

  insertTodo = () => {
    context.mongodb.insertOne({ name: 'lol', value: 'go shoppping' });
  };
  return context;
};


after(async () => system.stop());

// insertTodo({ name: 'lol' }) => { name: 'blabla' }

export default {
  start,
  insertTodo,
};
