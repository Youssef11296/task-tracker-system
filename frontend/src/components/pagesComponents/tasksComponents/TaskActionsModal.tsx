import { Button, Popover } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../context';
import { setSelectedTask } from '../../../context/actions/tasksActions';
import { useTasks } from '../../../hooks/useTasks';
import { ConfirmComponent } from '../../uiComponents/sharedComponents';
import CreateTask from './CreateTask';
import TaskModal from './TaskModal';

interface Props {
    open: boolean;
    task: Task;
    anchorEl: any;
    setAnchorEl: any;
    onClose: () => void
}

const TaskActionsModal: React.FC<Props> = ({ open, task, onClose, anchorEl }) => {
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
        onClose()
    };

    const onClickDeleteBtn = (e: any) => {
        !openCustomModalState && e.stopPropagation();
        dispatch(setSelectedTask(task));
        setConfirmationPurpose("DELETE_TASK")
        setConfirmationQuestion("Are you sure, you want to delete this task?")
        onOpenConfirmModal();
        onClose()
    };

    const onClickViewBtn = (e: any) => {
        !openCustomModalState && e.stopPropagation()
        dispatch(setSelectedTask(task));
        onOpenTaskModal();
        onClose()
    };

    useEffect(() => {
        if (openCustomModalState === false) onClose()
    }, [openCustomModalState, task])

    // confirm component funcs
    const openPopover = Boolean(anchorEl);
    const id = openPopover ? 'simple-popover' : undefined;


    return (
        <>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column !important'
                }}
            >
                <Button
                    onClick={onClickEditBtn}
                    sx={{
                        p: 2, display: 'block',
                        textTransform: 'capitalize',
                        fontWeight: 600
                    }}
                >
                    Edit
                </Button>
                <Button
                    onClick={onClickDeleteBtn}
                    sx={{
                        p: 2, display: 'block',
                        textTransform: 'capitalize',
                        fontWeight: 600
                    }}
                >
                    Delete
                </Button>
                <Button
                    onClick={onClickViewBtn}
                    sx={{
                        p: 2, display: 'block',
                        textTransform: 'capitalize',
                        fontWeight: 600
                    }}
                >
                    View
                </Button>
            </Popover>
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