// constants
import { useTasks } from "../../../hooks/useTasks";
import { TASK_SATUS } from "../../../utils/constants";

interface Props {
  task: Task;
  onOpenTaskModal: () => void;
  setSelectedTask: (task: Task | null) => void;
}

const TaskItem: React.FC<Props> = ({
  task,
  onOpenTaskModal,
  setSelectedTask,
}) => {
  return (
    <div
      className="task-item"
      style={{
        background: task?.status === TASK_SATUS.COMPLETED ? "#080" : "",
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
    </div>
  );
};

export default TaskItem;
