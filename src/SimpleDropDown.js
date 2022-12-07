import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export  function SimpleDropDown({state,setState}) {
//   const [state, setState] = React.useState(1);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="simpleDropdown"
          onChange={handleChange}
        >
          <MenuItem value={1}>true</MenuItem>
          <MenuItem value={20}>False</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}