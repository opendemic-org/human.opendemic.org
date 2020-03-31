import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Home from "./pages/Home";
import Modal from "./components/Modal";

import UserActions from "./store/user";
import fingerprint from "./utils/fingerprint";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => { getFingerPrint() }, []);
  async function getFingerPrint() {
    const fp = await fingerprint();
    dispatch(UserActions.storeFingerPrint(fp));
  }

  return (
    <Router>
      <Modal />
      <Container>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
