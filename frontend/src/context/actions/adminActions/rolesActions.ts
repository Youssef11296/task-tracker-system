// action types
import * as actionTypes from "../actionTypes";
// api
import * as api from "../../../services/api";
// actions
import { setLoading } from "../uiActions";

//* Get All Roles
const getAllRoles = (token: User["token"]) => async (dispatch: any) => {
  try {
    const { data } = await api.adminAPI.getAllRoles(token);

    dispatch(setLoading(true));

    dispatch({
      type: actionTypes.GET_ALL_ROLES,
      payload: {
        data: data.data,
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

//* Select Role
const selectRole = (role: Role) => {
  return {
    type: actionTypes.SELECT_ROLE,
    payload: role,
  };
};

//* Edit Role
const editRole =
  (token: User["token"], roleId: Role["_id"], role: Role) =>
  async (dispatch: any) => {
    try {
      const { data } = await api.adminAPI.editRole(token, roleId, role);

      dispatch(setLoading(true));

      dispatch({
        type: actionTypes.EDIT_ROLE,
        payload: {
          message: data.message,
          data: data.data,
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

//* Delete Role
const deleteRole =
  (token: User["token"], roleId: Role["_id"]) => async (dispatch: any) => {
    try {
      const { data } = await api.adminAPI.deleteRole(token, roleId);

      dispatch(setLoading(true));

      dispatch({
        type: actionTypes.DELETE_ROLE,
        payload: {
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
export { getAllRoles, selectRole, editRole, deleteRole };
