import logger from 'module-tsl-logger';
import controllerCtor from './controller';

const logRequest = logger.middleware();

export default ({ app, config, metrics, mongodb, refdata }) => {
  const controller = controllerCtor({ config, metrics, mongodb, refdata });
  app.get('/api/todos', controller.read);
  app.post('/api/todo', controller.create);

  app.use(logRequest);
};
