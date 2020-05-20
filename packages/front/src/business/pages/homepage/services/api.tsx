import axios from 'axios';
import { ArticleResponse } from 'common-project/dist/business/articles';

export const getArticles = async (): Promise<ArticleResponse[]> => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/articles`);
  if (response.status !== 200) {
    throw Error(`Error while fetching articles: ${response.statusText}`);
  }
  return response.data;
};
