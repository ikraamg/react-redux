import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import BottomNav from './BottomNav';
import styles from '../styles/ItemDetails.module.scss';

function ItemDetails() {
  const { itemId } = useParams();
  return (
    <>
      <div className={styles.page}>
        <div className={styles.title}>{itemId}</div>
        <div className={styles.description}>Description</div>
        <BottomNav />
      </div>
    </>
  );
}

export default ItemDetails;
