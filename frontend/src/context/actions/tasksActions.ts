import * as actionTypes from "./actionTypes";
import * as api from "../../utils/api";
import { useToast } from "../../hooks/useToast";

// Tasks actions
export const getAllTasks = (token: User["token"]) => async (dispatch: any) => {
  try {
    const { data } = await api.tasksAPI.getAllTasks(token);
    dispatch({
      type: actionTypes.GET_ALL_TASKS,
      payload: {
        tasks: data.data,
      },
    });
  } catch (error) {
    useToast("error", error as string);
  }
};

export const createTask =
  (
    token: User["token"],
    taskName: Task["taskName"],
    description: Task["description"],
    status: Task["status"]
  ) =>
  async (dispatch: any) => {
    try {
      const { data } = await api.tasksAPI.createTask(
        token,
        taskName,
        description,
        status
      );
      dispatch({
        type: actionTypes.CREATE_TASK,
        payload: {
          message: data.message,
          task: data.data,
        },
      });
    } catch (error) {
      useToast("error", error);
    }
  };
