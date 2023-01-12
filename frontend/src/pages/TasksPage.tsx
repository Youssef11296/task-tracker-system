// hooks & modules
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useTasks } from "../hooks/useTasks";
// components
import { TasksComponent } from "../components/pagesComponents/tasksComponents";
import NotAuthComponent from "../components/sharedComponents/NotAuthComponent";

const TasksPage = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <NotAuthComponent />;

  return <TasksComponent />;
};

export default TasksPage;
