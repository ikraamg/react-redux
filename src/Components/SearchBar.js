import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import changeFilter from '../actions/actions';

export default function SearchBar() {
  // const [value, setValue] = useState(null);
  // const [inputValue, setInputValue] = useState('');
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  return (
    <>
      <Autocomplete
        onInputChange={(event, newInputValue) => {
          if (newInputValue === '') { dispatch(changeFilter('ALL')); }
        }}
        onChange={(event, newValue) => (newValue ? dispatch(changeFilter(newValue.title)) : 'ALL')}
        options={items}
        getOptionLabel={option => option.title}
      // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={params => <TextField {...params} label="Filter Results" variant="outlined" />}
      />
    </>
  );
}
