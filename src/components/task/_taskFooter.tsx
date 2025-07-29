import React, { FC, ReactElement } from 'react';
import {Typography, Box, Button, Switch} from '@mui/material';

export const TaskFooter: FC = (
    props,
): ReactElement => {
return (
        <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        px={2}
        py={1}
        >
        <Box display="flex" alignItems="center">
            <Switch defaultChecked color="warning" />
            <Typography color="white">In Progress</Typography>
        </Box>
        <Button
            variant="contained"
            sx={{
            backgroundColor: '#4CAF50', 
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: '#43a047',
            },
            }}
        >
            Mark Complete
        </Button>
        </Box>
    );
};
