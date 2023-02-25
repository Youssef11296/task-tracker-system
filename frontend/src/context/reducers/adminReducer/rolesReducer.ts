// action types
import * as actionTypes from "../../actions/actionTypes";

// initial state
const initialState: {
  rolesList: Role[];
  selectedRole: Role | null;
} = {
  rolesList: [],
  selectedRole: null,
};

// roles reducer
const rolesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_ROLES:
      return {
        ...state,
        rolesList: action.payload.data,
      };
    case actionTypes.CREATE_ROLE:
      return {
        ...state,
        rolesList: [...state.rolesList, action.payload.data],
      };
    case actionTypes.SELECT_ROLE:
      return {
        ...state,
        selectedRole: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rolesReducer;
