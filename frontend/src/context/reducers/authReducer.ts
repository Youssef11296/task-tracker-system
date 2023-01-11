import * as actionTypes from "../actions/actionTypes";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  user: null,
  isAuthenticated: false,
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
      cookies.set("auth-token", action.payload.token);
      return { ...state, loading: false, user: action.payload };
    }
    case actionTypes.LOGIN_SUCCESS: {
      cookies.set("auth-token", action.payload.token);
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    }
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
      return { ...state, loading: false, isAuthenticated: false, user: null };
    case actionTypes.LOGOUT_USER:
      return { ...state, loading: false, isAuthenticated: false, user: null };
    default:
      return { ...state };
  }
};

export default authReducer;
