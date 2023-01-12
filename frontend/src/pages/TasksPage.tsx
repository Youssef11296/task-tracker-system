import { TasksComponent } from "../components/pagesComponents/tasksComponents";
import { useAuth } from "../hooks/useAuth";
import NotAuthComponent from "../components/sharedComponents/NotAuthComponent";

const TasksPage = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <NotAuthComponent />;

  return (
    <div>
      <TasksComponent />
    </div>
  );
};

export default TasksPage;
