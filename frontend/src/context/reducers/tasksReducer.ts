import { useToast } from "../../hooks/useToast";
import * as actionTypes from "../actions/actionTypes";

const initialState: {
  tasks: Task[];
  selectedTask: Task | null;
} = {
  tasks: [],
  selectedTask: null,
};

const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CREATE_TASK:
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
      break;
    case actionTypes.DELETE_TASK:
      useToast("success", action.payload?.message);
      break;
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
