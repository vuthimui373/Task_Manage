import React, { FC, ReactElement } from 'react';

import { Grid , Box, TableRow} from '@mui/material';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../task/task';
import { TaskDescription } from '../task/_taskDescription';
export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
          <h2>
          Status Of Your Tasks As On {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </h2>
      </Box>
      <Grid 
      container
      display={"flex"}
      justifyContent={'center'}
      alignItems={"center"}>
        <Grid item       
        container
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        md={10}
        xs={12}
        mb={8}>
              <TaskCounter/>                         
        </Grid> 
        <Grid item 
          container
          display="flex"
          flexDirection="column"
          xs={10}
          mb={8}>
            <Task/>
            <Task/>
            <Task/>
        </Grid>
      </Grid>

    </Grid>
  );
};
