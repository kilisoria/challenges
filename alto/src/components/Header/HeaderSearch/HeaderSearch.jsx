import React from "react";

import {
  TextField,
  Autocomplete
} from '@mui/material';

const HeaderSearch = ({ onChange, options }) => {
  if (!options || options.length <= 0) {
    return null;
  }

  return (
    <>
      <Autocomplete
        id="search"
        freeSolo
        size="small"
        options={options.map((option) => option.title)}
        renderInput={(params) => <TextField {...params}
          size="small"
          label="Search in the site"
        />}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
      />
    </>
  )
}

export default HeaderSearch;
