// hooks & modules
import { useState } from "react";
import Cookies from "universal-cookie";
import { AppDispatch, RootState } from "../context";
import { useDispatch, useSelector } from "react-redux";
// constants
import { VAR_NAME } from "../utils/constants";
// redux
import {
  createTask,
  deleteTask,
  getAllTasks,
  setSelectedTask,
  updateTask,
} from "../context/actions/tasksActions";

export const useTasks = () => {
  const cookies = new Cookies();
  const authToken = cookies.get(VAR_NAME.AUTH_TOKEN);

  const [openCreateTaskModal, setOpenCreateTaskModal] = useState(false);

  const onOpenCreateTaskModal = (e?: any) => setOpenCreateTaskModal(true);
  const onCloseCreateTaskModal = () => {
    dispatch(setSelectedTask(null));
    setOpenCreateTaskModal(false);
  };

  const { tasks } = useSelector((state: RootState) => state.tasks);

  // states
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const onOpenTaskModal = () => setOpenTaskModal(true);
  const onCloseTaskModal = () => setOpenTaskModal(false);

  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false);
  const onOpenConfirmModal = () => setOpenConfirmModal(true);
  const onCloseConfirmModal = () => setOpenConfirmModal(false);

  const [loading, setLoading] = useState<boolean>(false);

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

  const getAllTasksHandler = () => {
    dispatch(getAllTasks(authToken));
  };

  return {
    getAllTasksHandler,
    createTaskHandler,
    updatTaskHandler,
    tasks,
    openCreateTaskModal,
    onOpenCreateTaskModal,
    onCloseCreateTaskModal,
    setOpenCreateTaskModal,
    openTaskModal,
    onOpenTaskModal,
    onCloseTaskModal,
    openConfirmModal,
    onOpenConfirmModal,
    onCloseConfirmModal,
    deleteTaskHandler,
    loading,
  };
};
