import React, {FC, ReactElement} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ITextField } from './ITextField';
import  PropTypes  from 'prop-types';
export const TaskTitleField: FC<ITextField> =(
    props,
): ReactElement =>{
    const{
        onChange=(e)=> console.log(e),
        disabled=false
    }= props;
    return(

        <TextField           
            id="title"
            label="Task Title"
            defaultValue="New Test Task"
            name="title"
            variant="outlined"
            size='small'
            className='title'
            disabled={disabled}
            onChange={onChange}
        >  
        </TextField>
    )
}
TaskTitleField.propTypes={
    onChange:PropTypes.func,
    disabled:PropTypes.bool,
}