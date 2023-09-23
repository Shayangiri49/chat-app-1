import { combineReducers } from "redux";
import sessionStorage from 'redux-persist/es/storage/session';
import appReducer from "./slices/app";

// Slices

const rootPersistConfig = {
  key: "root",
  storage: sessionStorage,
  keyPrefix: "redux-",
  // whitelist: [],
  // blacklist: [],
};

const rootReducer = combineReducers({
  app: appReducer,
});

export { rootPersistConfig, rootReducer };
