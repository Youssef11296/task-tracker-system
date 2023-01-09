import * as actionTypes from "./actionTypes";
import * as api from "../../utils/api";

export const registerUser =
  ({ username, email, password }: User) =>
  async (dispatch: any) => {
    try {
      const { data } = await api.registerUser({ username, email, password });
      dispatch({
        type: actionTypes.REGISTER_USER,
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
      const { data } = await api.registerUser({ email, password });
      dispatch({
        type: actionTypes.LOGIN_USER,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
