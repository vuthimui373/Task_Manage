import React, { FC, ReactElement } from 'react';
import { Grid, Box, Typography } from '@mui/material';

interface StatusCardProps {
  count: number;
  label: string;
  color: string;
}

const StatusCard: FC<StatusCardProps> = ({ count, label, color }): ReactElement => {
  return (
    <Box textAlign="center">
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          border: `4px solid ${color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '50 auto',
        }}
      >
        <Typography variant="h6" color="white">{count}</Typography>
      </Box>
      <Typography mt={1} color="white">{label}</Typography>
    </Box>
  );
};

export const TaskCounter: FC = (): ReactElement => {
  return (
    <Grid container spacing={18} justifyContent="center">
      <Grid item>
        <StatusCard count={10} label="Todo" color="#ff6666" />
      </Grid>
      <Grid item>
        <StatusCard count={2} label="In Progress" color="#ffb74d" />
      </Grid>
      <Grid item>
        <StatusCard count={12} label="Completed" color="#66bb6a" />
      </Grid>
    </Grid>
  );
};

