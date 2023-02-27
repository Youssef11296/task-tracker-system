// action types
import { useToast } from "../../hooks/useToast";
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
        packagesList: action.payload.data,
      };
    case actionTypes.CHOOSE_PACKAGE:
      useToast("success", action.payload.message);
      return { ...state };
    default:
      return {
        ...state,
      };
  }
};

export default packagesReducer;
