import ArticleList from 'business/articles-list';
import classnames from 'classnames';
import React from 'react';
import { Gutter } from 'ui/layout/gutter';
import Page from 'ui/layout/pages';
import variables from 'ui/styles/variables.module.scss';
import styles from './index.module.scss';

const HomePage: React.FC = () => {
  return (
    <Page>
      <Gutter maxWidth={variables.gutterSize}>
        <div
          className={classnames(
            styles.flexColumn,
            styles.flexCentered,
            styles.container,
          )}
        >
          <ArticleList />
        </div>
      </Gutter>
    </Page>
  );
};

export default HomePage;
