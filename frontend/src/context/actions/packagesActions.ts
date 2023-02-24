// action types
import * as actionTypes from "./actionTypes";
// api
import * as api from "../../utils/api";
import { setLoading } from "./uiActions";

//* Packages Actions

export const getAllPackages = () => async (dispatch: any) => {
  try {
    const { data } = await api.packagesAPI.getAllPackages();

    dispatch(setLoading(true));

    dispatch({
      type: actionTypes.GET_ALL_PACKAGES,
      payload: data.data,
    });

    dispatch(setLoading(false));
  } catch (error) {
    dispatch({
      type: actionTypes.SOME_ERROR_OCCURED,
      message: error,
    });
  }
};
