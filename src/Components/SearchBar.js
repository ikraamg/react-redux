import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import styles from '../styles/SearchBar.module.scss';

const SearchBar = ({ items, changeFilter }) => (
  <Autocomplete
    className={styles.bar}
    onInputChange={(event, newInputValue) => {
      if (newInputValue === '') { changeFilter('All'); }
    }}
    onChange={(event, newValue) => (newValue ? changeFilter(newValue) : 'ALL')}
    options={items}
    getOptionLabel={option => option}
      // eslint-disable-next-line react/jsx-props-no-spreading
    renderInput={params => <TextField {...params} label="Filter Results" variant="outlined" />}
  />
);

SearchBar.propTypes = {
  // items: PropTypes.arrayOf(PropTypes.shape({
  //   API: PropTypes.string,
  //   Auth: PropTypes.string,
  //   Category: PropTypes.string,
  //   Cors: PropTypes.string,
  //   Description: PropTypes.string,
  //   HTTPS: PropTypes.bool,
  //   Link: PropTypes.string,
  // })).isRequired,
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default SearchBar;
