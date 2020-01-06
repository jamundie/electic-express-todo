const fs = require('fs');

const pkg = require('./package.json');

let manifest = {};
if (fs.existsSync('./manifest.json')) {
  manifest = require('./manifest.json'); // eslint-disable-line global-require, import/no-unresolved
}

module.exports = {
  active: false,

  serviceVersion: manifest.build || pkg.version,

  serverUrl: 'http://apm-server.logging.svc.cluster.local:8200',

  ignoreUrls: ['/status'],

  logLevel: 'error',
};
