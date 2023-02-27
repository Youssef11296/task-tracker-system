// action types
import * as actionTypes from "./actionTypes";
// api
import * as api from "../../services/api";
import { setLoading } from "./uiActions";
import { useToast } from "../../hooks/useToast";

//* Packages Actions
const getAllPackages = () => async (dispatch: any) => {
  try {
    const { data } = await api.packagesAPI.getAllPackages();
    if (!data) {
      dispatch(setLoading(true));
    }
    if (data) {
      dispatch({
        type: actionTypes.GET_ALL_PACKAGES,
        payload: {
          data: data.data,
        },
      });
    }
    dispatch(setLoading(false));
  } catch (error) {
    dispatch({
      type: actionTypes.SOME_ERROR_OCCURED,
      message: error,
    });
  }
};

const choosePackage =
  (token: User["token"], packageId: Package["_id"]) =>
  async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      const { data } = await api.packagesAPI.choosePackage(token, packageId);
      dispatch({
        type: actionTypes.CHOOSE_PACKAGE,
        payload: {
          data: data?.data,
          message: data?.message,
        },
      });
      dispatch(setLoading(false));
    } catch (error) {
      useToast("error", error as string);
    }
  };

export { getAllPackages, choosePackage };
