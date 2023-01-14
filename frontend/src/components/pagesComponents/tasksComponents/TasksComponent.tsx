// hooks & modules
import { useTasks } from "../../../hooks/useTasks";
// components
import TaskItem from "./TaskItem";
import CreateTask from "./CreateTask";
import SelectedTask from "./TaskModal";
import { useState } from "react";
import TaskModal from "./TaskModal";
import ConfirmComponent from "../../sharedComponents/ConfirmComponent";
import { Button } from "@mui/material";

const TasksComponent = () => {
  const {
    tasks,
    openCreateTaskModal,
    onOpenCreateTaskModal,
    openTaskModal,
    onOpenTaskModal,
    onCloseTaskModal,
    openConfirmModal,
    onOpenConfirmModal,
    onCloseConfirmModal,
    onCloseCreateTaskModal,
  } = useTasks();
  return (
    <div className="tasks-component">
      {!tasks || tasks.length === 0 ? (
        <p>You do not have any tasks yet!</p>
      ) : null}

      <Button
        variant="outlined"
        sx={{
          textTransform: "capitalize",
          // margin: "auto",
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
          {tasks?.map((task: Task) => (
            <TaskItem
              key={task?._id}
              task={task}
              onOpenTaskModal={onOpenTaskModal}
              onOpenCreateTaskModal={onOpenCreateTaskModal}
              onOpenConfirmModal={onOpenConfirmModal}
            />
          ))}
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
