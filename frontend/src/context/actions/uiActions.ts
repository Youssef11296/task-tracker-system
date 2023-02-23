// action types
import * as actionTypes from "./actionTypes";

export const setLoading = (bool: boolean) => {
  return {
    type: actionTypes.SET_LOADING,
    payload: bool,
  };
};

export const toggleCustomModal = (bool: Boolean) => {
  return {
    type: actionTypes.TOGGLE_CUSTOM_MODAL,
    payload: bool,
  };
};
