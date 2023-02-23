// action types
import * as actionTypes from "../actions/actionTypes";

// initial state
const initialState: {
  packagesList: any[];
} = {
  packagesList: [],
};

// packages reducer
const packagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PACKAGES:
      return {
        ...state,
        packagesList: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default packagesReducer;
