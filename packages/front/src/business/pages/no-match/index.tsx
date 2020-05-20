import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return <div className={styles.container}>{t('app.404notFound')}</div>;
};

export default HomePage;
