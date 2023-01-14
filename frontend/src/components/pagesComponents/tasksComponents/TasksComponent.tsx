// hooks & modules
import { useTasks } from "../../../hooks/useTasks";
// components
import TaskItem from "./TaskItem";
import CreateTask from "./CreateTask";
import SelectedTask from "./TaskModal";
import { useState } from "react";
import TaskModal from "./TaskModal";
import ConfirmComponent from "../../sharedComponents/ConfirmComponent";

const TasksComponent = () => {
  const {
    tasks,
    openCreateTaskModal,
    onOpenCreateTaskModal,
    setOpenCreateTaskModal,
    openTaskModal,
    onOpenTaskModal,
    onCloseTaskModal,
    selectedTask,
    setSelectedTask,
    openConfirmModal,
    onOpenConfirmModal,
    onCloseConfirmModal,
    onCloseCreateTaskModal,
  } = useTasks();

  console.log({ openConfirmModal });

  return (
    <div className="tasks-component">
      {!tasks || tasks.length === 0 ? (
        <p>You do not have any tasks yet!</p>
      ) : null}

      <button onClick={onOpenCreateTaskModal}>
        {openCreateTaskModal ? "Close" : "Create"}
      </button>

      <CreateTask open={openCreateTaskModal} onClose={onCloseCreateTaskModal} />
      <div className="tasks-container">
        <div className="tasks-list flex-column">
          {tasks?.map((task: Task) => (
            <TaskItem
              key={task?._id}
              task={task}
              onOpenTaskModal={onOpenTaskModal}
              setSelectedTask={setSelectedTask}
              openCreateTaskHandler={() => console.log("OPEN CAETE TASK")}
              onOpenConfirmModal={onOpenConfirmModal}
            />
          ))}
        </div>

        <TaskModal
          open={openTaskModal}
          onOpen={onOpenTaskModal}
          onClose={onCloseTaskModal}
          selectedTask={selectedTask}
        />

        <ConfirmComponent
          purpose="DELETE_TASK"
          question="You're sure you want to delete this task?"
          open={openConfirmModal}
          onClose={onCloseConfirmModal}
          selectedTask={selectedTask as Task}
        />
      </div>
    </div>
  );
};

export default TasksComponent;
