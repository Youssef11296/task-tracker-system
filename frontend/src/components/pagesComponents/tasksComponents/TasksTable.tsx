// components
import TaskItem from './TaskItem';
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

const TasksTable = () => {
    const { tasks, onOpenTaskModal, onOpenCreateTaskModal, onOpenConfirmModal } = useTasks()

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Task Name</StyledTableCell>
                        <StyledTableCell align="right">Description</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">Created At</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks?.map((task: Task) => (
                        <TaskItem task={task} key={task?._id} onOpenTaskModal={onOpenTaskModal} onOpenConfirmModal={onOpenConfirmModal} onOpenCreateTaskModal={onOpenCreateTaskModal} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TasksTable