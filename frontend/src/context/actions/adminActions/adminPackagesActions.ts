// action types
import * as actionTypes from "../../actions/actionTypes";
// api
import * as api from "../../../services/api";
import { setLoading } from "../uiActions";

//* Create Package
const createPackage =
  (token: User["token"], newPackageData: Package) => async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      const { data } = await api.adminAPI.createPackage(token, newPackageData);
      dispatch({
        type: actionTypes.CREATE_PACKAGE,
        payload: {
          data: data.data,
          message: data.message,
        },
      });
      dispatch(setLoading(false));
    } catch (error) {
      dispatch({
        type: actionTypes.SOME_ERROR_OCCURED,
        message: error,
      });
    }
  };

//* Select Package
const selectPackage = (packageData: Package | null) => {
  return {
    type: actionTypes.SELECT_PACKAGE,
    payload: packageData,
  };
};

//* Delete Package
const deletePackage =
  (token: User["token"], packageId: Package["_id"]) =>
  async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      const { data } = await api.adminAPI.deletePackage(token, packageId);
      dispatch({
        type: actionTypes.DELETE_PACKAGE,
        payload: {
          data: data.data,
          message: data.message,
        },
      });
      dispatch(setLoading(false));
    } catch (error) {
      dispatch({
        type: actionTypes.SOME_ERROR_OCCURED,
        message: error,
      });
    }
  };

export { createPackage, deletePackage, selectPackage };
