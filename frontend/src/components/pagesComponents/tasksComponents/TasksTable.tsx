import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTasks } from '../../../hooks/useTasks';
import TaskItem from './TaskItem';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TasksTable() {
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