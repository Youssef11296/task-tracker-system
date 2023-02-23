// action types
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
    default:
      return {
        ...state,
      };
  }
};

export default uiReducer;
