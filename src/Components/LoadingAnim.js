import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from '../styles/LoadingAnim.module.scss';

export default function CircularIndeterminate() {
  return (
    <div className={styles.position}>
      <CircularProgress color="info" />
    </div>
  );
}
