import * as React from 'react';
import { useState, useMemo } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { SimpleComponent } from './SimpleComponent';
import { Button } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const INITIAL_OPTIONS = ["red","blue","green","yellow","white","pink"]

export function DropDownComponent() {
    const [options, setOptions] = React.useState([]);
    const [searchabe, setSearchable] = React.useState(1);
    const [multiselect, setMultiselect] = React.useState(1);
    const [searchText, setSearchText] = useState("");
    const [submit, setSubmit] = useState(false);

    function handleClear() {
        setOptions([]);
        setSubmit(false);
    }
    function handleSubmit() {
        setSubmit(true);
        setTimeout(() => setSubmit(false), 3000);
    }
    
    function handleSelectAll(e) {
        if (e.target.checked) {
            setOptions(INITIAL_OPTIONS)
        } else {
            setOptions([])
        }
    }

    const handleChange = (event) => {
        const value = event.target.value;
        multiselect?setOptions(value):(value.length>0)?setOptions([value[value.length-1]]):setOptions([])
        
    };

    const containsText = (text, searchText) =>
        text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    const displayedOptions = useMemo(
        () => INITIAL_OPTIONS.filter((option) => containsText(option, searchText)),
        [searchText]
    );

    return (
        <div className="mainContainer">
            <h1 style={{ color: "turquoise" }}>Welcome to Home Screen!!!</h1>
            <div className="SimpleSelect">
                <SimpleComponent state={searchabe} setState={setSearchable} name={"Searchable"} />
                <SimpleComponent state={multiselect} setState={setMultiselect} name={"Multiselect"} />
            </div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">DropDown</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={options}
                    onChange={handleChange}
                    //   onChange={(e) => setSelectedOption(e.target.value)}
                    onClose={() => setSearchText("")}
                    input={<OutlinedInput label="DropDown" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {searchabe ? <input
                        placeholder='Search options...'
                        autoFocus
                        style={{ width: "98%", marginLeft: "2px", height: "40px",position:"sticky"}}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                                // Prevents autoselecting item while typing (default Select behaviour)
                                e.stopPropagation();
                            }
                        }} /> : null}
                    {multiselect ? <MenuItem value={options}>
                        <Checkbox
                            onChange={handleSelectAll}
                        />
                        <ListItemText
                            primary={"Select All"}
                        />
                    </MenuItem> : null}

                    {displayedOptions.map((name) => (
                        <MenuItem key={name} value={name}>
                            {multiselect ? <Checkbox checked={options.indexOf(name) > -1} /> : null}
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
                {multiselect ? <div className="SimpleButton">
                    <Button variant="contained" style={{backgroundColor:"turquoise"}} onClick={handleSubmit}>Submit</Button>
                    <Button variant="contained" style={{backgroundColor:"turquoise"}} onClick={handleClear}>Clear</Button>
                </div> : null}
            </FormControl>
            {submit ? <div style={{ padding: "50px 50pX" }}>
                {options.join(" , ")}
            </div> : null}
        </div>
    );
}