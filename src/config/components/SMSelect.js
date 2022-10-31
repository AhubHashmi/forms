import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SMSelect(props) {
    const { label, value, onChange, datasource, required } = props;
    return (
        <>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                required={required}
                fullWidth={true}
                variant='standard'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={label}
            >
                {datasource && datasource.length > 0 ? datasource.map((x) => (
                    <MenuItem value={x.id}>{x.fullName}</MenuItem>
                ))
                    : null}

            </Select>
        </>
    );
}
