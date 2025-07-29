import React, {FC, ReactElement} from 'react';
import TextField from '@mui/material/TextField';

export const TaskDateField: FC=(): ReactElement =>{
    return(
        <TextField           
            id="date"
            label="Task Date"
            type="date" 
            defaultValue="2022-09-07" 
            variant='outlined'
            size='small'
            className='date'
      InputLabelProps={{
        shrink: true, 
      }}
        >  
        </TextField>
    )
}
