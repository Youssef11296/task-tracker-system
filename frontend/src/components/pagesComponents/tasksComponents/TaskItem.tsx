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
    <div
      className="task-item"
      style={{
        color: task?.status === TASK_SATUS.TODO ? "#000" : "#fff",
        boxShadow: task?.status === TASK_SATUS.TODO ? "0 1px 1px rgba(0,0,0,.4)" : '',
        background:
          task?.status === TASK_SATUS.COMPLETED ? "#6ab04c" :
            task?.status === TASK_SATUS.TODO ? "#fff" : 'rgb(45, 159, 217)',
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
        xs={2}
        justifyContent="center"
        alignItems="center"
      >
        {
          task?.status === TASK_SATUS.TODO ? <Edit
            sx={{ color: "#000", fontSize: "1.2rem" }}
            onClick={onClickEditBtn}
          /> : null
        }

        <Delete
          sx={{ color: "rgb(239, 96, 80)", fontSize: "1.2rem", marginLeft: 'auto' }}
          onClick={onClickDeleteBtn}
        />
      </Grid>
    </div>
  );
};

export default TaskItem;
