// action types
import * as actionTypes from "../../actions/actionTypes";

const initialState: {
  usersList: User[];
} = {
  usersList: [],
};

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_USERS:
      return {
        ...state,
        usersList: action.payload.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default usersReducer;
