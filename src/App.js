import React from "react";
import { IntlProvider } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import Modal from "./components/Modal";

import * as localeMessages from "./lib/localized";
import UserActions from "./store/user";
import fingerprint from "./utils/fingerprint";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  const dispatch = useDispatch();

  let locale = useSelector((state) => state.user.locale);
  if (!locale) {
    locale = "en";
  }

  async function getFingerPrint() {
    const fp = await fingerprint();
    dispatch(UserActions.storeFingerPrint(fp));
  }
  getFingerPrint();

  return (
    <Router>
      <IntlProvider
        locale={locale}
        key={locale}
        messages={localeMessages[locale]}
      >
        <Loader />
        <Modal />
        <Container>
          <Header />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </IntlProvider>
    </Router>
  );
}

export default App;
