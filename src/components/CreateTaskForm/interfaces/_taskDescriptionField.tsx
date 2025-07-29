import React, {FC, ReactElement} from 'react';
import TextField from '@mui/material/TextField';
import { ITextField } from './ITextField';
import  PropTypes  from 'prop-types';
export const TaskDescriptionField: FC<ITextField> =(
    props,
): ReactElement =>{
    const{
        onChange=(e)=> console.log(e),
        disabled=false
    }= props;
    return(
        <TextField           
            id="des"
            label="Description"
            defaultValue="...."
            variant='outlined'
            multiline
                rows={5}
                fullWidth
            size='small'
            className='description'
            disabled={disabled}
            onChange={onChange}
        >  
        </TextField>
    )
}
TaskDescriptionField.propTypes={
    onChange:PropTypes.func,
    disabled:PropTypes.bool,
}