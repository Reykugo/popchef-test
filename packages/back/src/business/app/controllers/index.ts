import { Request, Response } from 'express';

export const welcome = async (_req: Request, res: Response) => {
  return res.status(200).send({ message: 'Welcome to api' });
};
