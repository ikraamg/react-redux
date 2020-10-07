import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import {
  HashRouter as Router,
  Link,
  useRouteMatch,
} from 'react-router-dom';

function Item({ title, year }) {
  const match = useRouteMatch();
  return (
    <Link to={`${match.url}/title`}>
      <Button variant="contained" color="default">
        <div>{title}</div>
        <div>{year}</div>
      </Button>
    </Link>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,

};

export default Item;
