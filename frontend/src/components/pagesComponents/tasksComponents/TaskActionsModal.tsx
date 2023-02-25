import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../context';
import { setSelectedTask } from '../../../context/actions/tasksActions';
import { useTasks } from '../../../hooks/useTasks';
import { Delete, Edit, ViewAgenda, ViewCarousel } from '@mui/icons-material';
import { ConfirmComponent } from '../../uiComponents/sharedComponents';
import CreateTask from './CreateTask';
import TaskModal from './TaskModal';

interface Props {
    open: Boolean;
    handleClose: () => void
    task: Task;
}

const TaskActionsModal: React.FC<Props> = ({ open, handleClose, task }) => {
    const {
        onOpenConfirmModal,
        onOpenCreateTaskModal,
        onOpenTaskModal,
        openConfirmModal,
        onCloseConfirmModal,
        openCreateTaskModal,
        onCloseCreateTaskModal,
        openTaskModal,
        onCloseTaskModal
    } = useTasks()

    const { openCustomModalState } = useSelector((state: RootState) => state.ui)

    // local states
    const [confirmationPurpose, setConfirmationPurpose] = useState<CONFIRMATION_PURPOSE>("DELETE_TASK")
    const [confirmationQuestion, setConfirmationQuestion] = useState<string>("")

    // dispatcher
    const dispatch: AppDispatch = useDispatch()

    const onClickEditBtn = (e: any) => {
        !openCustomModalState && e.stopPropagation();
        dispatch(setSelectedTask(task));
        onOpenCreateTaskModal();
    };

    const onClickDeleteBtn = (e: any) => {
        !openCustomModalState && e.stopPropagation();
        dispatch(setSelectedTask(task));
        setConfirmationPurpose("DELETE_TASK")
        setConfirmationQuestion("Are you sure, you want to delete this task?")
        onOpenConfirmModal();
    };

    const onClickViewBtn = (e: any) => {
        !openCustomModalState && e.stopPropagation()
        dispatch(setSelectedTask(task));
        onOpenTaskModal();
    };

    useEffect(() => {
        if (openCustomModalState === false) handleClose()
    }, [openCustomModalState, task])


    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    top: '2rem',
                    zIndex: 2,
                    display: openCustomModalState && open ? 'block' : 'none',
                    right: '-8rem',
                    background: '#fff',
                    padding: '.25rem 1rem',
                    borderRadius: '2px',
                    width: 150,
                    boxShadow: '0 1px 1px rgba(0,0,0,.2)'
                }}
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Button
                    variant="text"
                    fullWidth
                    onClick={onClickEditBtn}
                    startIcon={<Edit />}
                    sx={{ textTransform: 'capitalize', fontWeight: 'bold', alignItems: 'center', justifyContent: 'space-around' }}
                >
                    Edit
                </Button>
                <Button
                    variant="text"
                    fullWidth
                    onClick={onClickDeleteBtn}
                    startIcon={<Delete />}
                    sx={{ textTransform: 'capitalize', fontWeight: 'bold', alignItems: 'center', justifyContent: 'space-around' }}
                >
                    Delete
                </Button>
                <Button
                    variant="text"
                    fullWidth
                    onClick={onClickViewBtn}
                    startIcon={<ViewAgenda />}
                    sx={{ textTransform: 'capitalize', fontWeight: 'bold', alignItems: 'center', justifyContent: 'space-around' }}
                >
                    View
                </Button>
            </Box>

            <ConfirmComponent
                open={openConfirmModal}
                onClose={onCloseConfirmModal}
                question={confirmationQuestion}
                purpose={confirmationPurpose}
            />

            <CreateTask
                open={openCreateTaskModal}
                onClose={onCloseCreateTaskModal}
            />

            <TaskModal
                open={openTaskModal}
                onClose={onCloseTaskModal}
            />
        </>

    )
}

export default TaskActionsModal