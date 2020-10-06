import React from 'react';
import PropTypes from 'prop-types';
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

ItemDetails.propTypes = {

};

export default ItemDetails;
