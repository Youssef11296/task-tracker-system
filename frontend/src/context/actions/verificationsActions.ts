import * as actionTypes from "./actionTypes";
import * as api from "../../utils/api";

export const sendVerificationRequest =
  (token: User["token"], nationalIdNum: number, nationalIdImg: File) =>
  async (dispatch: any) => {
    try {
      const { data } = await api.authAPI.sendVerificationRequest(
        token,
        nationalIdNum,
        nationalIdImg
      );
      dispatch({
        type: actionTypes.SEND_VERIFICATION_REQUEST,
        payload: {
          message: data.message,
          data: data.data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: actionTypes.VERIFICATION_REQUEST_ERROR,
        payload: {
          message: error?.response?.data?.message,
        },
      });
    }
  };
