// constants
import { Delete, Edit } from "@mui/icons-material";
import { useTasks } from "../../../hooks/useTasks";
import { TASK_SATUS } from "../../../utils/constants";
import { Grid, IconButton } from "@mui/material";

interface Props {
  task: Task;
  onOpenTaskModal: () => void;
  setSelectedTask: (task: Task | null) => void;
  onOpenCreateTaskModal: () => void;
  onOpenConfirmModal: () => void;
}

const TaskItem: React.FC<Props> = ({
  task,
  onOpenTaskModal,
  setSelectedTask,
  onOpenConfirmModal,
  onOpenCreateTaskModal,
}) => {
  const onClickEditBtn = (e: any) => {
    e.stopPropagation();
    onOpenCreateTaskModal();
  };

  const onClickDeleteBtn = (e: any) => {
    e.stopPropagation();
    onOpenConfirmModal();
    setSelectedTask(task);
  };

  return (
    <div
      className="task-item"
      style={{
        background:
          task?.status === TASK_SATUS.COMPLETED ? "#6ab04c" : "#95a5a6",
      }}
      onClick={() => {
        console.log("SELCER");
        setSelectedTask(task);
        onOpenTaskModal();
      }}
    >
      <div className="task-content">
        <h4 className="task-name">{task?.taskName}</h4>
        <p className="task-description">{task?.description?.slice(0, 50)}</p>
        {task?.description?.length > 50 ? <span>...</span> : null}
      </div>
      <span className="task-status">{task?.status}</span>

      <Grid
        container
        flex={0.3}
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton onClick={onClickEditBtn}>
          <Edit sx={{ color: "#2980b9" }} />
        </IconButton>

        <IconButton onClick={onClickDeleteBtn}>
          <Delete sx={{ color: "#c0392b" }} />
        </IconButton>
      </Grid>
    </div>
  );
};

export default TaskItem;
