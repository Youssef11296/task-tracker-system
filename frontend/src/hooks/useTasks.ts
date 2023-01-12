// hooks & modules
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import Cookies from "universal-cookie";
// constants
import { VAR_NAME } from "../utils/constants";
// redux
import { createTask, getAllTasks } from "../context/actions/tasksActions";
import { useEffect, useState } from "react";

export const useTasks = () => {
  const cookies = new Cookies();
  const authToken = cookies.get(VAR_NAME.AUTH_TOKEN);

  const [openCreateTask, setOpenCreateTask] = useState(false);

  const openCreateTaskHandler = () => setOpenCreateTask((ps) => !ps);
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const [openTaskModal, setOpenTaskModal] = useState(false);
  const onOpenTaskModal = () => setOpenTaskModal(true);
  const onCloseTaskModal = () => setOpenTaskModal(false);

  const dispatch: AppDispatch = useDispatch();

  const getAllTasksHandler = () => dispatch(getAllTasks(authToken));

  useEffect(() => {
    getAllTasksHandler();
  }, []);

  const createTaskHandler = (
    taskName: Task["taskName"],
    description: Task["description"],
    status: Task["status"]
  ) => dispatch(createTask(authToken, taskName, description, status));

  return {
    getAllTasksHandler,
    createTaskHandler,
    tasks,
    openCreateTask,
    openCreateTaskHandler,
    openTaskModal,
    onOpenTaskModal,
    onCloseTaskModal,
    selectedTask,
    setSelectedTask,
  };
};
