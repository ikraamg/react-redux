/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import top100Films from '../helpers/testArray';

export default function SearchBar() {
  // const [value, setValue] = useState(null);
  // const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Autocomplete
        // onInputChange={(event, newInputValue) => {
        //   console.log(newInputValue);
        // }}
        onChange={(event, newValue) => {
          if (newValue) { console.log(newValue); }
        }}
        options={top100Films}
        getOptionLabel={option => option.title}
      // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={params => <TextField {...params} label="Filter Results" variant="outlined" />}
      />
    </>
  );
}
