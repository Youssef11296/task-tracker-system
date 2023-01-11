import * as actionTypes from "./actionTypes";
import * as api from "../../utils/api";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";

export const registerUser =
  ({ username, email, password }: User) =>
  async (dispatch: any) => {
    try {
      const { data } = await api.registerUser({ username, email, password });
      dispatch({
        type: actionTypes.REGISTER_USER,
      });
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: {
          message: data.message,
          user: data.data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        payload: {
          message: error?.response?.data?.message,
        },
      });
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
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
          message: data.message,
          user: data.data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        payload: {
          message: error?.response?.data?.message,
        },
      });
    }
  };

export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER,
    payload: {
      message: "You've just logged out.",
    },
  };
};
