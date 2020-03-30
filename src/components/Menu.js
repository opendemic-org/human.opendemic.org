import React from "react";
import { Button } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import ModalActions from "../store/modal";
import UserActions from "../store/user";
import { requestGeolocation } from "../utils/permissions";

export default function Menu(props) {
  const dispatch = useDispatch();

  function getCoordinates() {
    requestGeolocation(handleCoordinates, handleFailure);
  }
  function handleCoordinates(position) {
    dispatch(UserActions.setCoordinates(position.coords));
  }
  function handleFailure() {
    dispatch(ModalActions.show(
      true,
      "Geolocation must be enabled to view cases near you.",
      {
        icon: "error",
        confirmText: "Ok",
        onClose: () => { dispatch(ModalActions.show(false)) },
        onConfirm: () => { dispatch(ModalActions.show(false)) },
      }
    ));
  }

  return (
    <Container>
    <ButtonContainer>
      <Button onClick={getCoordinates}>
        Cases Near Me
      </Button>
    </ButtonContainer>
    <ButtonContainer>
      <Button>
        Log Symptoms
      </Button>
    </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 100px 20px 20px 20px;
  position: absolute;
  z-index: 2;
`;

const ButtonContainer = styled.div`
  padding: 10px 0px;
`;

