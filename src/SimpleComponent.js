import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export  function SimpleComponent({state,setState,name}) {
  

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="SimpleSelect"
          onChange={handleChange}
        >
          <MenuItem value={1}>True</MenuItem>
          <MenuItem value={0}>False</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}