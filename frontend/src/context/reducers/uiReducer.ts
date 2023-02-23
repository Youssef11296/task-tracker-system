// action types
import { useToast } from "../../hooks/useToast";
import * as actionTypes from "../actions/actionTypes";

const initialState: {
  loading: boolean;
  openCustomModalState: boolean;
} = {
  loading: false,
  openCustomModalState: false,
};

const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case actionTypes.TOGGLE_CUSTOM_MODAL:
      return {
        ...state,
        openCustomModalState: action.payload,
      };
    case actionTypes.SOME_ERROR_OCCURED:
      useToast("error", action.message as string);
      break;
    default:
      return {
        ...state,
      };
  }
};

export default uiReducer;
