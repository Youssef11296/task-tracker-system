import * as actionTypes from "./actionTypes";
import * as api from "../../utils/api";

export const registerUser =
  ({ username, email, password }: User) =>
  async (dispatch: any) => {
    try {
      const { data } = await api.registerUser({ username, email, password });
      dispatch({
        type: actionTypes.REGISTER_USER,
      });
      if (!data.success) {
        dispatch({
          type: actionTypes.REGISTER_FAIL,
        });
        return;
      }
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const loginUser =
  ({ email, password }: User) =>
  async (dispatch: any) => {
    try {
      const { data } = await api.loginUser({ email, password });
      dispatch({
        type: actionTypes.LOGIN_USER,
      });
      if (!data.success) {
        dispatch({
          type: actionTypes.LOGIN_FAIL,
        });
        return;
      }
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER,
  };
};
