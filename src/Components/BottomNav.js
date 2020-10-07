import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import styles from '../styles/BottomNav.module.scss';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      className={styles.position}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction className={styles.flex} label="Like" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Favourite" icon={<StarIcon />} />
      <BottomNavigationAction label="Share" icon={<ShareIcon />} />
    </BottomNavigation>
  );
}
