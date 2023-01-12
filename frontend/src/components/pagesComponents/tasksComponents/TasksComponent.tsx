// hooks & modules
import { useTasks } from "../../../hooks/useTasks";
// components
import TaskItem from "./TaskItem";
import CreateTask from "./CreateTask";
import SelectedTask from "./TaskModal";
import { useState } from "react";
import TaskModal from "./TaskModal";

const TasksComponent = () => {
  const {
    tasks,
    openCreateTask,
    openCreateTaskHandler,
    openTaskModal,
    onOpenTaskModal,
    onCloseTaskModal,
    selectedTask,
    setSelectedTask,
  } = useTasks();

  return (
    <div className="tasks-component">
      {!tasks || tasks.length === 0 ? (
        <p>You do not have any tasks yet!</p>
      ) : null}

      <button onClick={openCreateTaskHandler}>
        {openCreateTask ? "Close" : "Create"}
      </button>

      {openCreateTask ? (
        <CreateTask openCreateTaskHandler={openCreateTaskHandler} />
      ) : (
        <div className="tasks-container">
          <div className="tasks-list flex-column">
            {tasks?.map((task: Task) => (
              <TaskItem
                key={task?._id}
                task={task}
                onOpenTaskModal={onOpenTaskModal}
                setSelectedTask={setSelectedTask}
              />
            ))}
          </div>

          <TaskModal
            open={openTaskModal}
            onOpen={onOpenTaskModal}
            onClose={onCloseTaskModal}
            selectedTask={selectedTask}
          />
        </div>
      )}
    </div>
  );
};

export default TasksComponent;
