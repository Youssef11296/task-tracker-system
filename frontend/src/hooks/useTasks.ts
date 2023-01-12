// hooks & modules
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import Cookies from "universal-cookie";
// constants
import { VAR_NAME } from "../utils/constants";
// redux
import { createTask, getAllTasks } from "../context/actions/tasksActions";

export const useTasks = () => {
  const cookies = new Cookies();
  const authToken = cookies.get(VAR_NAME.AUTH_TOKEN);

  const { tasks } = useSelector((state: RootState) => state.tasks);

  const dispatch: AppDispatch = useDispatch();

  const getAllTasksHandler = () => dispatch(getAllTasks(authToken));

  const createTaskHandler = (
    taskName: Task["taskName"],
    description: Task["description"],
    status: Task["status"]
  ) => dispatch(createTask(authToken, taskName, description, status));

  return { getAllTasksHandler, createTaskHandler, tasks };
};
