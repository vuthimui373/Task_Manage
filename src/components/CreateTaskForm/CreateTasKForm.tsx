import React, {FC, ReactElement} from "react";
import {Box, Typography, Stack} from '@mui/material';
import { TaskTitleField } from "./interfaces/_taskTitleField";
import { TaskDescriptionField } from "./interfaces/_taskDescriptionField";
import { TaskDateField } from "./interfaces/_taskDateField";
import { TaskSelectField } from "./interfaces/_taskSelectField";
import  PropTypes  from 'prop-types';
import { Status } from "./enum/Status";
import { Priority } from "./enum/Priority";
export const CreateTaskForm:FC=():ReactElement=>{
    return(
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            px={4}
            my={6}
        >
            <Typography mb={2}  component="h2" variant="h6">
                Create A Task
            </Typography>
            <Stack sx= {{width: '100%'}} spacing={2}>
                {/*Task Title*/}
                <TaskTitleField/>
                {/*Task Description*/}
                <TaskDescriptionField/>
                {/*Task Date*/}
                <TaskDateField/>
                <Stack direction={"row"}  spacing={2}>
                    <TaskSelectField
                    label="Status"
                    name="status"
                    items={[
                        {
                            value: Status.todo,
                            label: Status.todo.toUpperCase(),
                        },
                        {
                            value: Status.inProgress,
                            label: Status.inProgress.toUpperCase(),
                        },
                        {
                            value: Status.completed,
                            label: Status.completed.toUpperCase(),
                        }

                    ]}
                    />
                    <TaskSelectField
                    label="Priority"
                    name="priority"
                    items={[
                        {
                            value: Priority.high,
                            label: Priority.high.toUpperCase(),
                        },
                        {
                            value: Priority.low,
                            label: Priority.low.toUpperCase(),
                        },
                        {
                            value: Priority.normal,
                            label: Priority.normal.toUpperCase(),
                        }

                    ]}/>
                </Stack>


            </Stack>
        </Box>
    );
}

TaskSelectField.propTypes={
        onChange:PropTypes.func,
        name :PropTypes.string,
        label: PropTypes.string,
        disabled:PropTypes.bool,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            }).isRequired,
        )
}