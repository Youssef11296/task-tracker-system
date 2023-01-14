// constants
import { Delete, Edit } from "@mui/icons-material";
import { useTasks } from "../../../hooks/useTasks";
import { TASK_SATUS } from "../../../utils/constants";
import { Button } from "@mui/material";
import { useState } from "react";
import ConfirmComponent from "../../sharedComponents/ConfirmComponent";

interface Props {
  task: Task;
  onOpenTaskModal: () => void;
  setSelectedTask: (task: Task | null) => void;
  openCreateTaskHandler: () => void;
  onOpenConfirmModal: () => void;
}

const TaskItem: React.FC<Props> = ({
  task,
  onOpenTaskModal,
  setSelectedTask,
  openCreateTaskHandler,
  onOpenConfirmModal,
}) => {
  const { setSelectedTaskForUpdate } = useTasks();

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

      {/* <Button onClick={openCreateTaskHandler}>
        <Edit />
      </Button> */}

      <Delete
        sx={{ color: "#c0392b" }}
        onClick={(e: any) => {
          e.stopPropagation();
          onOpenConfirmModal();
          setSelectedTask(task);
        }}
      />
    </div>
  );
};

export default TaskItem;
