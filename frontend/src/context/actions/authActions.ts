import * as actionTypes from "./actionTypes";
import * as api from "../../services/api";
import { setLoading } from "./uiActions";

export const registerUser =
  (
    username: User["username"],
    email: User["email"],
    password: User["password"]
  ) =>
  async (dispatch: any) => {
    try {
      const { data } = await api.authAPI.registerUser(
        username,
        email,
        password
      );
      dispatch({
        type: actionTypes.REGISTER_USER,
      });

      dispatch(setLoading(true));

      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: {
          message: data.message,
          user: data.data,
        },
      });

      dispatch(setLoading(false));
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
  (email: User["email"], password: User["password"]) =>
  async (dispatch: any) => {
    try {
      const { data } = await api.authAPI.loginUser(email, password);
      dispatch({
        type: actionTypes.LOGIN_USER,
      });

      dispatch(setLoading(true));

      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
          message: data.message,
          user: data.data,
        },
      });

      dispatch(setLoading(false));
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

export const getMe = (token: User["token"]) => async (dispatch: any) => {
  try {
    const { data } = await api.authAPI.getMe(token);
    dispatch({
      type: actionTypes.AUTHENTICATING_USER,
    });

    dispatch(setLoading(true));

    if (data) {
      dispatch({
        type: actionTypes.GET_ME,
        payload: {
          user: data.data,
        },
      });
    }

    dispatch(setLoading(false));
  } catch (error) {
    dispatch({
      type: actionTypes.NOT_AUTH,
      message: "Sorry, you're not authenticated, try login or register.",
    });
  }
};
