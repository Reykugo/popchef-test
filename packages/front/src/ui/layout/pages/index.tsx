import classnames from 'classnames';
import React from 'react';
import styles from './index.module.scss';

const Page: React.FC = ({ children }) => {
  return (
    <div className={classnames(styles.flexColumn, styles.page)}>{children}</div>
  );
};

export default Page;
