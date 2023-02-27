// modules
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../context";
// components
import TaskActionsModal from "./TaskActionsModal";
// mui
import { Button, IconButton, Popover } from "@mui/material";
import { MoreVert } from '@mui/icons-material';
import { toggleCustomModal } from "../../../context/actions/uiActions";
import { StyledTableCell, StyledTableRow } from "../../uiComponents/muiComponents/TableComponents";
import { useTasks } from "../../../hooks/useTasks";
import { setSelectedTask } from "../../../context/actions/tasksActions";
import { ConfirmComponent } from "../../uiComponents/sharedComponents";
import CreateTask from "./CreateTask";
import TaskModal from "./TaskModal";


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
}) => {
  const dispatch: AppDispatch = useDispatch();

  const { openCustomModalState } = useSelector((state: RootState) => state.ui)

  const [openActionsModal, setOpenActionsModal] = useState<boolean>(false)

  // popover props
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenActionsModal(true)
  };

  const onClose = () => {
    setOpenActionsModal(false)
    setAnchorEl(null)
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
      <StyledTableCell component="th" scope="row" align="center">
        {task?.status}
      </StyledTableCell>
      <StyledTableCell>
        {task?.createdAt}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" sx={{ position: 'relative' }}>
        <IconButton onClick={handleClick}>
          <MoreVert />
        </IconButton>
        <TaskActionsModal
          open={openActionsModal}
          task={task}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          onClose={onClose}
        />
      </StyledTableCell>
    </StyledTableRow >
  );
};

export default TaskItem;
