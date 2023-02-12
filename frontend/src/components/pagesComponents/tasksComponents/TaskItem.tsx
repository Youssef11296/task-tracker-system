// modules
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../context";
import { setSelectedTask } from "../../../context/actions/tasksActions";
import { MoreVert } from '@mui/icons-material';
// mui
import { IconButton } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../../uiComponents/muiComponents/TableComponents";


interface Props {
  task: Task;
  onOpenTaskModal: () => void;
  onOpenCreateTaskModal: () => void;
  onOpenConfirmModal: () => void;
}

const TaskItem: React.FC<Props> = ({
  task,
  onOpenTaskModal,
  onOpenConfirmModal,
  onOpenCreateTaskModal,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const onClickEditBtn = (e: any) => {
    e.stopPropagation();
    console.log({ task });
    dispatch(setSelectedTask(task));
    onOpenCreateTaskModal();
  };

  const onClickTaskItem = () => {
    dispatch(setSelectedTask(task));
    onOpenTaskModal();
  };

  const onClickDeleteBtn = (e: any) => {
    e.stopPropagation();
    dispatch(setSelectedTask(task));
    onOpenConfirmModal();
  };

  return (
    <StyledTableRow key={task?._id}>
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
      <StyledTableCell component="th" scope="row">
        <IconButton>
          <MoreVert />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default TaskItem;
