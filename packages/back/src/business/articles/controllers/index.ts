import { Request, Response } from 'express';
import {
  getArticles as dbGetArticles,
  getArticle as dbGetArticle,
  deleteArticle as dbDeleteArticle,
  addArticle as dbAddArticle,
  updateArticle as dbUpdateArticle,
} from 'business/db/store/articles';
import {
  ArticleCreateInput,
  ArticleUpdateInput,
} from 'common-project/dist/business/articles';

export const getArticles = async (_req: Request, res: Response) => {
  try {
    const articles = await dbGetArticles();
    return res.status(200).send(articles);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const getArticle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const article = await dbGetArticle(id);
    return res.status(200).send(article);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const deleteArticle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await dbDeleteArticle(id);
    return res.status(200).send();
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const addArticle = async (req: Request, res: Response) => {
  try {
    const data: ArticleCreateInput = req.body;
    const article = await dbAddArticle(data);
    return res.status(201).send(article);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const updateArticle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const article = await dbGetArticle(id);
    if (!article) {
      return res.status(404).send({ message: 'NotFound' });
    }
    const data: ArticleUpdateInput = req.body;
    if (!data.text && !data.label) {
      return res.status(200).send(article);
    }
    const newArticle = await dbUpdateArticle(id, { ...article, ...data });
    return res.status(201).send(newArticle);
  } catch (err) {
    return res.status(500).send(err);
  }
};
