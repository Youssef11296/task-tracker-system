import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TASKS:
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    default:
      return { ...state };
  }
};

export default tasksReducer;
