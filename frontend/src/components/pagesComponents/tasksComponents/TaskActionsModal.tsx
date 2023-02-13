import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../context';
import { setSelectedTask } from '../../../context/actions/tasksActions';
import { useTasks } from '../../../hooks/useTasks';
import { Delete, Edit, ViewAgenda, ViewCarousel } from '@mui/icons-material';

interface Props {
    open: Boolean;
    handleClose: () => void
    task: Task;
}

const TaskActionsModal: React.FC<Props> = ({ open, handleClose, task }) => {
    const { onOpenConfirmModal, onOpenCreateTaskModal, onOpenTaskModal } = useTasks()

    const { openCustomModalState } = useSelector((state: RootState) => state.ui)
    console.log({ openCustomModalState })

    // dispatcher
    const dispatch: AppDispatch = useDispatch()

    const onClickEditBtn = (e: any) => {
        e.stopPropagation();
        console.log({ task });
        dispatch(setSelectedTask(task));
        onOpenCreateTaskModal();
    };

    const onClickDeleteBtn = (e: any) => {
        e.stopPropagation();
        dispatch(setSelectedTask(task));
        onOpenConfirmModal();
    };

    const onClickViewBtn = (e: any) => {
        e.stopPropagation()
        dispatch(setSelectedTask(task));
        onOpenTaskModal();
    };

    useEffect(() => {
        if (openCustomModalState === false) handleClose()
    }, [openCustomModalState, task])

    return (
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
                onClick={onClickEditBtn}
                startIcon={<Edit />}
            >
                <Typography variant="button"
                    textAlign="left"
                    id="modal-modal-title"
                    sx={{ textTransform: 'capitalize', color: "#000" }}
                >
                    Edit
                </Typography>
            </Button>
            <Button
                variant="text"
                onClick={onClickDeleteBtn}
                startIcon={<Delete />}
            >
                <Typography
                    variant="button"
                    id="modal-modal-description"
                    sx={{ textTransform: 'capitalize', color: "#000" }}
                >
                    Delete
                </Typography>
            </Button>
            <Button
                variant="text"
                onClick={onClickViewBtn}
                startIcon={<ViewAgenda />}
            >
                <Typography
                    variant="button"
                    id="modal-modal-description"
                    sx={{ textTransform: 'capitalize', color: "#000" }}
                >
                    View
                </Typography>
            </Button>
        </Box>
    )
}

export default TaskActionsModal