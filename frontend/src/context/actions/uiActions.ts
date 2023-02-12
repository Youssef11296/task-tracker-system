// action types
import * as actionTypes from "./actionTypes";

export const toggleCustomModal = (bool: Boolean) => {
  return {
    type: actionTypes.TOGGLE_CUSTOM_MODAL,
    payload: bool,
  };
};
