import React, {FC, ReactElement} from 'react';
import { FormControl } from '@mui/material';
import {InputLabel} from '@mui/material';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {MenuItem} from '@mui/material';
import { ISelectField } from './ISelectField';
export const TaskSelectField: FC<ISelectField>=(
    props,

): ReactElement =>{
    const{ value ='', label= 'Select Box', name='selectBox', items=[{value:'', label: 'Add Items'}], disabled= false, 
    onChange=(e: SelectChangeEvent)=> console.log(e),}
    =props
    return(
        <FormControl fullWidth size='small'>
        <InputLabel id={`${name}-id`}>{label}</InputLabel>
        <Select
            labelId={`${name}-id`}
            id={`${name}-id-select`}
            value={value}
            label={label}
            name={name}
            disabled={disabled}
            onChange={onChange}
        >
            {items.map((item, index)=>(
                <MenuItem key={ item.value+ index} value={item.value}>{item.label}</MenuItem>
 
            ))}

        </Select>
        </FormControl>
    )
}
