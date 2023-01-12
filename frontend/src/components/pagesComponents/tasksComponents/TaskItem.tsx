import React from "react";

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <div className="task-item">
      <h4>{task?.taskName}</h4>
      <p>{task?.description}</p>
      <p>{task?.status}</p>
    </div>
  );
};

export default TaskItem;
