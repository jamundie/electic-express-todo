// This file is all standard boilerplate
require('elastic-apm-node/start');
require('@babel/register');

const { init } = require('./src/system');

(async () => {
  await init();
})();
