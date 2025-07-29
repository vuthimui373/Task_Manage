import React, { FC, ReactElement } from 'react';
import {Typography, Box, Chip} from '@mui/material';
import  PropTypes  from 'prop-types';
import { ITaskDescription } from '../CreateTaskForm/interfaces/ITaskDescription';
export const TaskDescription: FC <ITaskDescription>= (
    props,
): ReactElement => {
    const{
        description= " Finish a homework on the weekend"
    }= props
  return (
    <Box 
            display="flex"
            width="100%"
            justifyContent="space-between"
            mb={4}>
        <Box>
        <Typography>{description}</Typography>
        </Box>
    </Box>
  );
};
TaskDescription.propTypes={
    description:PropTypes.string,
}
