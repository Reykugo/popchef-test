import express from 'express';
import {
  getArticles,
  getArticle,
  deleteArticle,
  addArticle,
  updateArticle,
} from 'business/articles/controllers';
import { validateRequest } from 'technical/middleware/validation';
import { createArticleValidation } from 'common-project/src/business/articles/validation';

const router = express.Router();

router.get('/', getArticles);

router.get('/:id', getArticle);

router.delete('/:id', deleteArticle);

router.post(
  '/',
  validateRequest(createArticleValidation, 'InvalidOrMissingParameter'),
  addArticle,
);

router.patch('/:id', updateArticle);

export default router;
