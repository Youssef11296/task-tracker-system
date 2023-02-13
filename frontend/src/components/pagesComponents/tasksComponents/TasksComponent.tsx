// hooks & modules
import { useTasks } from "../../../hooks/useTasks";
// components
import CreateTask from "./CreateTask";
import { useEffect } from "react";
import TaskModal from "./TaskModal";
import ConfirmComponent from "../../uiComponents/sharedComponents/ConfirmComponent";
import { Button } from "@mui/material";
import TasksTable from "./TasksTable";

const TasksComponent = () => {
  const {
    openCreateTaskModal,
    onOpenCreateTaskModal,
    openTaskModal,
    onOpenTaskModal,
    onCloseTaskModal,
    openConfirmModal,
    onCloseConfirmModal,
    onCloseCreateTaskModal,
    loading,
    getAllTasksHandler
  } = useTasks();

  useEffect(() => {
    getAllTasksHandler();
  }, []);

  return (
    <div className="tasks-component">
      {loading ? <span className="loading">LOADING ...</span> : null}

      <Button
        variant="outlined"
        sx={{
          textTransform: "capitalize",
          display: "block",
          mb: 4,
        }}
        onClick={onOpenCreateTaskModal}
      >
        Add Task
      </Button>

      <CreateTask open={openCreateTaskModal} onClose={onCloseCreateTaskModal} />

      <div className="tasks-container">
        <div className="tasks-list flex-column">
          <TasksTable />
        </div>

        <TaskModal
          open={openTaskModal}
          onOpen={onOpenTaskModal}
          onClose={onCloseTaskModal}
        />

        <ConfirmComponent
          purpose="DELETE_TASK"
          question="You're sure you want to delete this task?"
          open={openConfirmModal}
          onClose={onCloseConfirmModal}
        />
      </div>
    </div>
  );
};

export default TasksComponent;
