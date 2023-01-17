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
    } catch (error) {
      dispatch({
        type: actionTypes.SOME_ERROR_OCCURED,
        message: "Some error occured while sending the request.",
      });
    }
  };
