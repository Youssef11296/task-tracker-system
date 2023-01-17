import { combineReducers, createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import tasksReducer from "./reducers/tasksReducer";
import verificationsReducer from "./reducers/verificationsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  verifications: verificationsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(compose(thunk)));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
