import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { sendVerificationRequest } from "../context/actions/verificationsActions";
import { useAuth } from "./useAuth";
import Cookies from "universal-cookie";

export const useVerifications = () => {
  const dispatch: AppDispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  const cookies = new Cookies();
  const authToken = cookies.get("auth-token");

  const sendVerificationRequestHandler = (
    nationalIdNum: number,
    nationalIdImg: File
  ) => {
    dispatch(sendVerificationRequest(authToken, nationalIdNum, nationalIdImg));
  };

  return { sendVerificationRequestHandler };
};
