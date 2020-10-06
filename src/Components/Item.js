import React from 'react';
import PropTypes from 'prop-types';

function Item({ title, year }) {
  return (
    <a type="button" href={`/itemList/${title}`}>
      <div>{title}</div>
      <div>{year}</div>
    </a>
  );
}

export default Item;
