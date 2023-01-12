// constants
import { TASK_SATUS } from "../../../utils/constants";

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <div
      className="task-item"
      style={{
        background: task?.status === TASK_SATUS.COMPLETED ? "#080" : "",
      }}
    >
      <div className="task-content">
        <h4 className="task-name">{task?.taskName}</h4>
        <p className="task-description">{task?.description?.slice(0, 50)}</p>
        {task?.description?.length > 50 ? <span>...</span> : null}
      </div>
      <span className="task-status">{task?.status}</span>
    </div>
  );
};

export default TaskItem;
