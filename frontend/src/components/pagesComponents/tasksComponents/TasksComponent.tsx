// hooks & modules
import { useState } from "react";
import { useTasks } from "../../../hooks/useTasks";
// components
import TaskItem from "./TaskItem";
import CreateTask from "./CreateTask";

const TasksComponent = () => {
  const [openCreateTask, setOpenCreateTask] = useState(false);

  const openCreateTaskHandler = () => setOpenCreateTask((ps) => !ps);

  const { tasks } = useTasks();
  console.log({ tasks });

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
          {tasks?.map((task: Task) => (
            <TaskItem key={task?._id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TasksComponent;
