import * as actionTypes from "../actions/actionTypes";
import Cookies from "universal-cookie";
// toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cookies = new Cookies();

const initialState = {
  user: null,
  isAuthenticated: cookies.get("auth-token") ? true : false,
  loading: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.REGISTER_USER:
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.REGISTER_SUCCESS: {
      cookies.set("auth-token", action.payload.user.token);

      const toastId = "someId";
      toast.success(action.payload.message, {
        position: toast.POSITION.TOP_RIGHT,
        toastId,
      });

      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    }

    case actionTypes.LOGIN_SUCCESS: {
      cookies.set("auth-token", action.payload.user.token);

      const toastId = "someId";
      toast.success(action.payload.message, {
        position: toast.POSITION.TOP_RIGHT,
        toastId,
      });

      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    }
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
      const toastId = "someId2";
      toast.error(action.payload.message, {
        position: toast.POSITION.TOP_RIGHT,
        toastId,
      });

      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case actionTypes.LOGOUT_USER: {
      cookies.remove("auth-token");
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        isAuthenticated: false,
        user: null,
      };
    }
    default:
      return { ...state };
  }
};

export default authReducer;
