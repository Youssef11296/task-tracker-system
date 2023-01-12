import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { getMe, logoutUser } from "../context/actions/actions";
import Cookies from "universal-cookie";
import { VAR_NAME } from "../utils/constants";

export const useAuth = () => {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch: AppDispatch = useDispatch();

  const cookies = new Cookies();

  const authToken = cookies.get(VAR_NAME.AUTH_TOKEN);

  const getMeHandler = () => {
    dispatch(getMe(authToken));
  };

  console.log({ user });

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const openLoginForm = () => {
    openRegister && setOpenRegister(false);
    !openLogin && setOpenLogin(true);
  };
  const openRegisterForm = () => {
    openLogin && setOpenLogin(false);
    !openRegister && setOpenRegister(true);
  };

  const logoutHandler = () => dispatch(logoutUser());

  return {
    openLogin,
    openRegister,
    openLoginForm,
    openRegisterForm,
    isAuthenticated,
    logoutHandler,
    getMeHandler,
  };
};
