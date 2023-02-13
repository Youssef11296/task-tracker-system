// components
import TaskItem from './TaskItem';
// components
import { ConfirmComponent } from '../../uiComponents/sharedComponents';
// hooks
import { useTasks } from '../../../hooks/useTasks';
// mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell } from '../../uiComponents/muiComponents/TableComponents';
import { Grid, Typography } from '@mui/material';

const TasksTable = () => {
    const { tasks, onOpenTaskModal, onOpenCreateTaskModal, onOpenConfirmModal } = useTasks()

    if (tasks?.length === 0) return (
        <Grid className="no-tasks" textAlign="center">
            <Typography variant="h4">You have no tasks yet!</Typography>
            <Typography variant="body1">Kindly, click the Add Task button above to add a new task.</Typography>
        </Grid>
    )

    return (
        <>
            <TableContainer component={Paper} sx={{ overflowX: 'visible' }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Task No.</StyledTableCell>
                            <StyledTableCell>Task Name</StyledTableCell>
                            <StyledTableCell align="center">Description</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell align="center">Created At</StyledTableCell>
                            <StyledTableCell align="right">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks?.map((task: Task, index: number) => (
                            <TaskItem task={task} taskNumber={index + 1} key={task?._id} onOpenTaskModal={onOpenTaskModal} onOpenConfirmModal={onOpenConfirmModal} onOpenCreateTaskModal={onOpenCreateTaskModal} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <ConfirmComponent /> */}
        </>
    );
}

export default TasksTable