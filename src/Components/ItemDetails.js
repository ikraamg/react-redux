import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import BottomNav from './BottomNav';

function ItemDetails() {
  const { itemId } = useParams();
  return (

    <div>
      <div>{itemId}</div>
      <BottomNav />
    </div>
  );
}

export default ItemDetails;
