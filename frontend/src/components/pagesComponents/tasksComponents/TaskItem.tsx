// constants
import { Delete, Edit } from "@mui/icons-material";
import { useTasks } from "../../../hooks/useTasks";
import { TASK_SATUS } from "../../../utils/constants";
import { Grid, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../context";
import { setSelectedTask } from "../../../context/actions/tasksActions";

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

  const { selectedTask } = useSelector((state: RootState) => state.tasks);

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
    // console.log(selectedTask);
    onOpenConfirmModal();
  };

  return (
    <div
      className="task-item"
      style={{
        color: "#fff",
        background:
          task?.status === TASK_SATUS.COMPLETED ? "#6ab04c" : "#2c3e50",
      }}
      onClick={onClickTaskItem}
    >
      <div className="task-content">
        <h4 className="task-name">{task?.taskName}</h4>
        <Grid container>
          <p className="task-description">{task?.description?.slice(0, 18)}</p>
          {task?.description?.length > 18 ? <span>...</span> : null}
        </Grid>
      </div>

      <Grid
        container
        flex={0.15}
        justifyContent="space-between"
        alignItems="center"
      >
        <Edit
          sx={{ color: "#fff", fontSize: "1.2rem" }}
          onClick={onClickEditBtn}
        />

        <Delete
          sx={{ color: "#c0392b", fontSize: "1.2rem" }}
          onClick={onClickDeleteBtn}
        />
      </Grid>
    </div>
  );
};

export default TaskItem;
