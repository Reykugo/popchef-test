import {
  addArticle as dbAddArticle,
  updateArticle as dbUpdateArticle,
  deleteArticle as dbDeleteArticle,
  getArticle as dbGetArticle,
  getArticles as dbGetArticles,
} from 'technical/db/migration/commands';
import {
  ArticleResponse,
  ArticleCreateInput,
} from 'common-project/dist/business/articles';

export const addArticle = async (
  data: ArticleCreateInput,
): Promise<ArticleResponse> => {
  const resultId = await dbAddArticle(data.label, data.text, new Date());
  return dbGetArticle(resultId);
};

export const updateArticle = async (
  id: ArticleResponse['id'],
  data: ArticleResponse,
) => {
  const resultId = await dbUpdateArticle(id, { ...data, date: new Date() });
  return dbGetArticle(resultId);
};

export const deleteArticle = async (id: ArticleResponse['id']) => {
  return dbDeleteArticle(id);
};

export const getArticle = async (
  id: ArticleResponse['id'],
): Promise<ArticleResponse> => {
  return dbGetArticle(id);
};

export const getArticles = async (): Promise<ArticleResponse[]> => {
  return dbGetArticles();
};
