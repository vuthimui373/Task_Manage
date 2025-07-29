import React, { FC, ReactElement } from 'react';
import {Typography, Box, Chip} from '@mui/material';
import { ITaskHeader } from '../CreateTaskForm/interfaces/ITaskHeader';
import { format } from 'path';
import { prototype } from 'events';
import  PropTypes  from 'prop-types';
export const TaskHeader: FC <ITaskHeader>= (
    props,
): ReactElement => {
    const{
        title="Default Title", 
        date=new Date()
    }= props
  return (
    <Box 
            display="flex"
            width="100%"
            justifyContent="space-between"
            mb={4}>
        <Box>
        <Typography variant='h6'>{title}123</Typography>
        </Box>
        <Box>
            <Chip 
                variant='outlined'
                  label={date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                })}
            />
        </Box>
    </Box>
  );
};
TaskHeader.propTypes={
    title:PropTypes.string,
    date:PropTypes.instanceOf(Date),
}