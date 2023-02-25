// action types
import * as actionTypes from "../actionTypes";
// api
import * as api from "../../../services/api";
import { setLoading } from "../uiActions";

//* Admin Users Actions
const getAllUsers = (token: User["token"]) => async (dispatch: any) => {
  try {
    const { data } = await api.adminAPI.getAllUsers(token);

    dispatch(setLoading(true));

    dispatch({
      type: actionTypes.GET_ALL_USERS,
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

export { getAllUsers };
