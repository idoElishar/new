import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';

function Comp1() {
    const [age, setAge] = React.useState('');
    const [Text, setText] = React.useState('Title');
    const [Title, setTitle1] = React.useState('Title');
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    function setTitle() {
        setTitle1(Text);
    }
    return (
        <div>
            <h3>{Title}</h3>
            <TextField onChange={(e) => setText(e.target.value)} id="outlined-basic" label="Enter Title" variant="outlined" sx={{ background: 'red' }} />
            <Button onClick={setTitle} variant="text">click to show Text</Button>
            <br />
            <br />
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                sx={{ background: 'blue' }}
            >
                <MenuItem value={10} sx={{ background: 'orange' }}>Ten</MenuItem>
                <MenuItem value={20} sx={{ background: 'purple' }}>Twenty</MenuItem>
                <MenuItem value={30} sx={{ background: 'silver' }}>Thirty</MenuItem>
            </Select>
            <br />
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 45,
                    },
                }} />
                <FormControlLabel value="male" control={<Radio />} label="Male" sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 45,
                    },
                }} />
                <FormControlLabel value="other" control={<Radio />} label="Other" sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 45,
                    },
                }} />
            </RadioGroup>
            <br />
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} defaultChecked
                sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }} />
            <Checkbox {...label} disabled />
            <Checkbox {...label} disabled checked />
        </div>
    )
}

export default Comp1