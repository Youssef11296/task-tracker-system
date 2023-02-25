// action types
import * as actionTypes from "../../actions/actionTypes";

// initial state
const initialState: {
  rolesList: Role[];
} = {
  rolesList: [],
};

// roles reducer
const rolesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_ROLES:
      return {
        ...state,
        rolesList: action.payload.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rolesReducer;
