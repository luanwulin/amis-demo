import React from 'react';
import { useLocation } from 'umi';
import styles from './index.less';

export default () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div>pathname: {pathname}</div>
    </div>
  );
};
