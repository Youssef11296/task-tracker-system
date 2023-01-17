// hooks & modules
import { useAuth } from "../hooks/useAuth";
// components
import { TasksComponent } from "../components/pagesComponents/tasksComponents";
import NotAuthComponent from "../components/sharedComponents/NotAuthComponent";
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
