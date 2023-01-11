import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../context";
import { logoutUser } from "../context/actions/actions";

export const useAuth = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

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

  const dispatch = useDispatch();

  const logoutHandler = () => dispatch(logoutUser());

  return {
    openLogin,
    openRegister,
    openLoginForm,
    openRegisterForm,
    isAuthenticated,
    logoutHandler,
  };
};
