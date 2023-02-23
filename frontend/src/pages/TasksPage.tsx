// components
import { TasksComponent } from "../components/pagesComponents/tasksComponents";
// styles
import "../styles/tasks.scss";

const TasksPage = () => {
  return (
    <section style={{ padding: '1rem 2rem', flex: 1, background: '#ecf0f1' }}>
      <TasksComponent />
    </section>
  );
};

export default TasksPage;
