import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { getMe, logoutUser } from "../context/actions/authActions";
import Cookies from "universal-cookie";
import { VAR_NAME } from "../utils/constants";

export const useAuth = () => {
  const { isAuthenticated, user }: { isAuthenticated: boolean, user: User | null } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch: AppDispatch = useDispatch();

  const cookies = new Cookies();

  const authToken = cookies.get(VAR_NAME.AUTH_TOKEN);

  const getMeHandler = () => {
    dispatch(getMe(authToken));
  };

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const onOpenLoginForm = () => setOpenLogin(true);
  const onCloseLoginForm = () => setOpenLogin(false);

  const onOpenRegisterForm = () => setOpenRegister(true);
  const onCloseRegisterForm = () => setOpenRegister(false);

  const logoutHandler = () => dispatch(logoutUser());

  return {
    authToken,
    openLogin,
    openRegister,
    onOpenLoginForm,
    onCloseLoginForm,
    onOpenRegisterForm,
    onCloseRegisterForm,
    isAuthenticated,
    logoutHandler,
    getMeHandler,
    user,
  };
};
