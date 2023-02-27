// action types
import { useToast } from "../../../hooks/useToast";
import * as actionTypes from "../../actions/actionTypes";

// initial state
const initialState: {
  packagesList: Package[];
  selectedPackage: Package | null;
} = {
  packagesList: [],
  selectedPackage: null,
};

// Admin packages reducer
const adminPackagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CREATE_PACKAGE:
      useToast("success", action.payload.message);
      return {
        ...state,
        packagesList: action.payload.data,
      };
    case actionTypes.SELECT_PACKAGE:
      return {
        ...state,
        selectedPackage: action.payload,
      };
    case actionTypes.DELETE_PACKAGE:
      useToast("success", action.payload.message);
      break;
    case actionTypes.EDIT_PACKAGE:
      useToast("success", action.payload.message);
      break;
    default:
      return {
        ...state,
      };
  }
};

export default adminPackagesReducer;
