// Hooks & modules
import { useToast } from "../../hooks/useToast";
import Cookies from "universal-cookie";
import * as actionTypes from "../actions/actionTypes";
// contants
import { VAR_NAME } from "../../services/constants";

const cookies = new Cookies();

const initialState: {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
} = {
  user: null,
  isAuthenticated:
    cookies.get(VAR_NAME.AUTH_TOKEN) &&
    cookies.get(VAR_NAME.AUTH_TOKEN) !== "undefined"
      ? true
      : false,
  loading: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATING_USER:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ME:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      };

    case actionTypes.NOT_AUTH:
      useToast("error", action.payload.message);
      return {
        ...state,
        isAuthenticated: false,
      };

    case actionTypes.REGISTER_USER:
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.REGISTER_SUCCESS: {
      cookies.set(VAR_NAME.AUTH_TOKEN, action.payload.user.token);

      useToast("success", action.payload.message);

      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    }

    case actionTypes.LOGIN_SUCCESS: {
      cookies.set("auth-token", action.payload.user.token);

      useToast("success", action.payload.message);

      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    }
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
      useToast("error", action.payload.message);

      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case actionTypes.LOGOUT_USER: {
      cookies.set(VAR_NAME.AUTH_TOKEN, undefined);

      useToast("info", action.payload.message);

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
