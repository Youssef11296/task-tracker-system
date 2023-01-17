import * as actionTypes from "../actions/actionTypes";
import * as api from "../../utils/api";
import { useToast } from "../../hooks/useToast";

const initialState: {
  verificationRequests: VerificationRequest[];
} = {
  verificationRequests: [],
};

const verificationsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SEND_VERIFICATION_REQUEST:
      useToast("success", action.payload.message);
      return {
        ...state,
        verificationRequests: [
          ...state.verificationRequests,
          action.payload.data,
        ],
      };
    case actionTypes.VERIFICATION_REQUEST_ERROR:
      useToast("error", action.payload.message);
    default:
      return { ...state };
  }
};

export default verificationsReducer;
