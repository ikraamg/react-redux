import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import styles from '../styles/AppBar.module.scss';

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar className={styles.flex}>
        <IconButton edge="start" color="inherit" aria-label="menu" href="/react-redux">
          <SettingsIcon />
        </IconButton>

        <Button href="/react-redux" color="inherit">
          <Typography variant="h6">API Explorer</Typography>
        </Button>

        <IconButton edge="end" color="inherit" aria-label="menu" href="/react-redux">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
