import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';

function Item({ title, pathLink }) {
  const [gif, setGif] = useState('');

  const fetchGif = () => fetch(`https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${title}`)
    .then(response => response.json())
    .then(data => {
      const result = data.data.images.fixed_height.url;
      setGif(result);
    });

  useEffect(() => {
    // fetchGif();
  });
  console.log(gif);

  return (
    <>
      <Link to={pathLink}>
        <CardItem title={title} gif={gif} />
      </Link>
    </>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  pathLink: PropTypes.string.isRequired,
};

export default Item;
