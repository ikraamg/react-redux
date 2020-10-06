import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function Item({ title, year }) {
  return (
    <Button variant="contained" color="default" href={`/itemList/${title}`}>
      <div>{title}</div>
      <div>{year}</div>
    </Button>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,

};

export default Item;
