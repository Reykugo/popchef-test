import { Application } from 'express';
import appRouter from './app';

export default (app: Application) => {
  app.use('/', appRouter);
};
