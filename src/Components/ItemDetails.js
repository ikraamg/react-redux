import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BottomNav from './BottomNav';
import styles from '../styles/ItemDetails.module.scss';
import { loadEntries } from '../actions/actions';
import LoadingAnim from './LoadingAnim';

function ItemDetails() {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const entries = useSelector(state => state.entries);
  let itemList = [];

  if (Object.keys(entries).length === 0) { loadEntries(dispatch, itemId); }
  try {
    itemList = entries[0].map(item => (
      <Button key={item.API} variant="contained" color="primary" href={item.Link} className={styles.button} rel="noopener noreferrer" target="_blank">
        {item.API}
        {': '}
        {item.Description}
      </Button>
    ));
  } catch (error) {
    return <LoadingAnim />;
  }

  return (
    <>
      <div className={styles.page}>
        <div className={styles.title}>
          {itemId}
          {' '}
          API
        </div>
        {itemList}
        <BottomNav />
      </div>
    </>
  );
}

export default ItemDetails;
