import { Application } from 'express';
import appRouter from './app';
import articlesRouter from './articles';

export default (app: Application) => {
  app.use('/', appRouter);
  app.use('/articles', articlesRouter);
};
