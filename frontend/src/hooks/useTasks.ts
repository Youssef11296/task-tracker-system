// hooks & modules
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import Cookies from "universal-cookie";
// constants
import { VAR_NAME } from "../utils/constants";
// redux
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../context/actions/tasksActions";
import { useEffect, useState } from "react";

export const useTasks = () => {
  const cookies = new Cookies();
  const authToken = cookies.get(VAR_NAME.AUTH_TOKEN);

  const [openCreateTask, setOpenCreateTask] = useState(false);

  const openCreateTaskHandler = (e?: any) => {
    e.stopPropagation();
    setOpenCreateTask((ps) => !ps);
  };
  const { tasks } = useSelector((state: RootState) => state.tasks);

  // states
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedTaskForUpdate, setSelectedTaskForUpdate] =
    useState<Task | null>(null);

  const [openTaskModal, setOpenTaskModal] = useState(false);
  const onOpenTaskModal = () => setOpenTaskModal(true);
  const onCloseTaskModal = () => setOpenTaskModal(false);

  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);
  const onOpenConfirmModal = () => setOpenConfirmModal(true);
  const onCloseConfirmModal = () => setOpenConfirmModal(false);

  const dispatch: AppDispatch = useDispatch();

  // api actions

  const createTaskHandler = (
    taskName: Task["taskName"],
    description: Task["description"],
    status: Task["status"]
  ) => dispatch(createTask(authToken, taskName, description, status));

  const updatTaskHandler = (task: Task, taskId: Task["_id"]) =>
    dispatch(updateTask(authToken, task, taskId));

  const deleteTaskHandler = async (taskId: Task["_id"]) => {
    await dispatch(deleteTask(authToken, taskId));
    await dispatch(getAllTasks(authToken));
  };

  const getAllTasksHandler = () => dispatch(getAllTasks(authToken));

  useEffect(() => {
    getAllTasksHandler();
  }, []);

  return {
    getAllTasksHandler,
    createTaskHandler,
    updatTaskHandler,
    tasks,
    openCreateTask,
    openCreateTaskHandler,
    setOpenCreateTask,
    openTaskModal,
    onOpenTaskModal,
    onCloseTaskModal,
    selectedTask,
    setSelectedTask,
    selectedTaskForUpdate,
    setSelectedTaskForUpdate,
    openConfirmModal,
    onOpenConfirmModal,
    onCloseConfirmModal,
    deleteTaskHandler,
  };
};
