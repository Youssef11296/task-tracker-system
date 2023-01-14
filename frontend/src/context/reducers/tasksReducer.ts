import { useToast } from "../../hooks/useToast";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tasks: [],
  selectedTask: null,
};

const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CREATE_TASK:
      console.log(action.payload);
      useToast("success", action?.payload?.message);

      return {
        ...state,
        tasks: [...state.tasks, action?.payload?.task],
      };
    case actionTypes.GET_ALL_TASKS:
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    case actionTypes.UPDATE_TASK:
      useToast("success", action?.payload?.message);

      return {
        ...state,
        tasks: state?.tasks?.map((task: Task) =>
          task._id === action.payload.updatedTask
            ? action?.payload?.updatedTask
            : task
        ),
      };
    case actionTypes.DELETE_TASK:
      useToast("success", action.payload?.message);

    case actionTypes.SET_SELECTED_TASK:
      return {
        ...state,
        selectedTask: action.payload?.task,
      };
    default:
      return { ...state };
  }
};

export default tasksReducer;
