// This file is all standard boilerplate

import Conflab from 'electric-conflab';
import Endpoints from 'module-tsl-endpoints/electric';
import { App, Server } from 'electric-express';
import { system as systemCtor } from 'electrician';
import logger from 'module-tsl-logger';
import environment from 'module-tsl-environment';
import Refdata from 'refdata/electric';
import MongodbClient from 'electric-mongodb';
import ElectricMetrics from 'electric-metrics';
import runner from 'electric-runner';
import pkg from '../package.json';
import routes from './routes';

const service = {
  dependsOn: ['app', 'config', 'metrics', 'mongodb', 'refdata'],
  start(app, config, metrics, mongodb, refdata, next) {
    routes({ app, config, metrics, mongodb, refdata });
    next();
  },
};

const components = {
  config: new Conflab({ pkg }),
  endpoints: new Endpoints(),
  metrics: new ElectricMetrics(),
  refdata: new Refdata(),
  mongodb: new MongodbClient(),
  app: new App(),
  service,
  server: new Server(),
};

const system = systemCtor(components);
export default system;

export const init = async () => {
  try {
    await runner(system).start();
    logger.info(`Started ${pkg.name} (port: ${pkg.config && pkg.config.port}, env: ${environment.name})`);
  } catch (error) {
    logger.error(`Start error: ${error}`);
    if (!process.emit('electrician-stop')) {
      process.exit(1);
    }
  }
};
