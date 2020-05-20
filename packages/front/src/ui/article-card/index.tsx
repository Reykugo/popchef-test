import DescriptionIcon from '@material-ui/icons/Description';
import classnames from 'classnames';
import { ArticleResponse } from 'common-project/dist/business/articles';
import React from 'react';
import variables from 'ui/styles/variables.module.scss';
import styles from './index.module.scss';

interface Props {
  article: ArticleResponse;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <div className={classnames(styles.flexColumn, styles.container)}>
      <div className={styles.imageContainer}>
        <DescriptionIcon
          style={{
            width: '100%',
            height: '100%',
            fill: variables.colorWhite,
            objectFit: 'contain',
          }}
        />
      </div>
      <div
        className={classnames(
          styles.flexColumn,
          styles.flexCentered,
          styles.infoContainer,
        )}
      >
        <span className={styles.label}>{article.label}</span>
        <span className={styles.text}>{article.text}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
