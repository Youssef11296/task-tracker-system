// modules
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../context";
import { setSelectedTask } from "../../../context/actions/tasksActions";
import { MoreVert } from '@mui/icons-material';
// mui
import { IconButton, Modal, Typography } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../../uiComponents/muiComponents/TableComponents";
import { useEffect, useState } from "react";
import TaskActionsModal from "./TaskActionsModal";
import { toggleCustomModal } from "../../../context/actions/uiActions";


interface Props {
  task: Task;
  taskNumber: number;
  onOpenTaskModal: () => void;
  onOpenCreateTaskModal: () => void;
  onOpenConfirmModal: () => void;
}

const TaskItem: React.FC<Props> = ({
  task,
  taskNumber,
  onOpenTaskModal,
  onOpenConfirmModal,
  onOpenCreateTaskModal,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const { openCustomModalState } = useSelector((state: RootState) => state.ui)

  const [openActionsModal, setOpenActionsModal] = useState<Boolean>(false)

  const openActionsModalHandler = (e: any) => {
    !openCustomModalState && e.stopPropagation()
    dispatch(toggleCustomModal(true))
    setOpenActionsModal(true)
  }

  return (
    <StyledTableRow key={task?._id}>
      <StyledTableCell align='left'>{taskNumber}.</StyledTableCell>
      <StyledTableCell component="th" scope="row">
        {task?.taskName}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row">
        {task?.description?.slice(0, 18)}
        {task?.description?.length > 18 ? <span>...</span> : null}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row">
        {task?.status}
      </StyledTableCell>
      <StyledTableCell>
        {task?.createdAt}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" sx={{ position: 'relative' }}>
        <IconButton onClick={openActionsModalHandler}>
          <MoreVert />
        </IconButton>
        <TaskActionsModal open={openActionsModal} handleClose={() => setOpenActionsModal(false)} task={task} key={task?._id} />
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default TaskItem;
