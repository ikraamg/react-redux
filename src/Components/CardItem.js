import React from 'react';
import {
  Card, CardActionArea, CardContent, CardMedia,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import LoadingAnim from './LoadingAnim';
import styles from '../styles/CardItem.module.scss';

export default function CardItem({ title, gif }) {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        {gif === ''
          ? <LoadingAnim />
          : (
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image={gif}
              title="Contemplative Reptile"
            />
          )}
        <CardContent className={styles.cardConent}>
          <p className={styles.heading}>
            {title}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired,
};
