import { combineReducers, createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import tasksReducer from "./reducers/tasksReducer";
import verificationsReducer from "./reducers/verificationsReducer";
import uiReducer from "./reducers/uiReducer";
import packagesReducer from "./reducers/packagesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  packages: packagesReducer,
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
