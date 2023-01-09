import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuth: false,
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.REGISTER_USER:
      return { ...state, user: action.payload };
    case actionTypes.LOGIN_USER:
      return { ...state, user: action.payload };
    default:
      return { ...state };
  }
};

export default authReducer;
