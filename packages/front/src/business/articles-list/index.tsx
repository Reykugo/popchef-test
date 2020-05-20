import React, { useState, useEffect } from 'react';
import { ArticleResponse } from 'common-project/dist/business/articles';
import { Grid } from 'ui/grid';
import { getArticles } from 'business/pages/homepage/services/api';
import ArticleCard from 'ui/article-card';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

const ArticleList: React.FC = () => {
  const { t } = useTranslation();
  const [articles, setArticles] = useState<ArticleResponse[]>();

  useEffect(() => {
    async function fecthArticles() {
      try {
        const response = await getArticles();
        setArticles(response);
      } catch (err) {
        console.log(err);
      }
    }
    fecthArticles();
  }, []);
  return (
    <Grid mode="auto-fit">
      {articles &&
        articles.length > 0 &&
        articles.map(article => (
          <ArticleCard article={article} key={article.id} />
        ))}

      {!articles ||
        (articles.length <= 0 && (
          <div className={styles.emptyList}>{t('articles.noArticles')}</div>
        ))}
    </Grid>
  );
};

export default ArticleList;
