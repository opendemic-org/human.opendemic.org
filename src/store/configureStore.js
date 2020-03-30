import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export const persistConfig = {
  key: "opendemic.storage",
  storage,
  whitelist: ["user"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}) {
  const middleware = [thunk];

  if (process.env.NODE_ENV === "development") {
    const logger = createLogger({});
    middleware.push(logger); // Logger must be the last item im middelware
  }

  let store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  let persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      const nextRootReducer = require("./rootReducer").default;
      store.replaceReducer(
        persistReducer(persistConfig, nextRootReducer)
      );
    });
  }

  window.persistor = persistor;

  return { store, persistor };
}
