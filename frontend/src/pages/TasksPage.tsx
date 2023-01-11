import React from "react";
import { TasksComponent } from "../components/tasksComponents";
import { useAuth } from "../hooks/useAuth";
import NotAuthComponent from "../shared/components/NotAuthComponent";

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
