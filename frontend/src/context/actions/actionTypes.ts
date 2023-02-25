//* Auth Action Types
export const AUTHENTICATING_USER = "AUTHENTICATING_USER";
export const NOT_AUTH = "NOT_AUTH";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_USER = "LOGOUT_USER";
export const GET_ME = "GET_ME";

//* Verifications Action Types
export const SEND_VERIFICATION_REQUEST = "SEND_VERIFICATION_REQUEST";
export const VERIFICATION_REQUEST_ERROR = "VERIFICATION_REQUEST_ERROR";

//* Error Action Types
export const SOME_ERROR_OCCURED = "SOME_ERROR_OCCURED";

//* Tasks Action Types
export const GET_ALL_TASKS = "GET_ALL_TASKS";
export const CREATE_TASK = "CREATE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_SELECTED_TASK = "SET_SELECTED_TASK";

//* Packages Action Types
export const GET_ALL_PACKAGES = "GET_ALL_PACKAGES";
export const CHOOSE_PACKAGE = "CHOOSE_PACKAGE";

//* Admin Actions
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_ROLES = "GET_ALL_ROLES";
export const SELECT_ROLE = "SELECT_ROLE";
export const EDIT_ROLE = "EDIT_ROLE";
export const DELETE_ROLE = "DELETE _ROLE";

//* UI Action Types
export const SET_LOADING = "SET_LOADING";

// UI ACTION TYPES
export const TOGGLE_CUSTOM_MODAL = "TOGGLE_CUSTOM_MODAL";
