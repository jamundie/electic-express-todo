import system from '../src/system';

const start = async () => {
  if (process.env.NODE_ENV !== 'test') {
    return Promise.reject(new Error('You must run these in NODE_ENV=test'));
  }
  return system.start();
};

after(async () => system.stop());

export default {
  start,
};
