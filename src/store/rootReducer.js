import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import loader from "./loader/reducer";
import map from "./map/reducer";
import modal from "./modal/reducer";
import user from "./user/reducer";

const persistConfig = {
  key: "opendemic.storage",
  storage,
  whitelist: ["user"],
};

const userPersistConfig = {
  key: "user",
  storage,
  blacklist: ["coordinates"],
};

export const rootReducer = combineReducers({
  loader,
  map,
  modal,
  user: persistReducer(userPersistConfig, user),
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
