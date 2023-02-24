import { combineReducers, createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  authReducer,
  tasksReducer,
  packagesReducer,
  verificationsReducer,
  uiReducer,
  usersReducer,
} from "./reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  packages: packagesReducer,
  users: usersReducer,
  verifications: verificationsReducer,
  ui: uiReducer,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
