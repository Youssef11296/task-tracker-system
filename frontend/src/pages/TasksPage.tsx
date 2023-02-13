// components
import { TasksComponent } from "../components/pagesComponents/tasksComponents";
// styles
import "../styles/tasks.scss";

const TasksPage = () => {
  return (
    <div className="tasks-page page container">
      <TasksComponent />
    </div>
  );
};

export default TasksPage;
