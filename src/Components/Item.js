import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';

function Item({ title, pathLink }) {
  return (
    <>
      <Link to={pathLink}>
        <CardItem />
        <Button variant="contained" color="default">
          <div>{title}</div>
        </Button>
      </Link>
    </>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  pathLink: PropTypes.string.isRequired,
};

export default Item;
