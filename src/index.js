import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as Sentry from "@sentry/browser";

import App from "./App";

import { SENTRY_DSN } from "./config";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import "./index.css";

const { store, persistor } = configureStore();

Sentry.init({ dsn: SENTRY_DSN });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
