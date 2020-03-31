import React from "react";
import { Button } from "@blueprintjs/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import ModalActions from "../store/modal";
import UserActions from "../store/user";
import { getCurrentPosition } from "../utils/geolocation";

export default function Menu(props) {
  const dispatch = useDispatch();

  const coordinates = useSelector(state => state.user.coordinates);

  async function captureLocation() {
    await getCurrentPosition()
      .then(handleCoordinates)
      .catch(() => {
        handleFailure(
          "Geolocation must be enabled to view cases near you.",
        );
      });
  }

  async function captureSymptoms() {
    if (!coordinates) {
      await getCurrentPosition()
        .then(props.openForm)
        .catch(() => {
          handleFailure(
            "Please enable geolocation access so we can accurately log your symptoms.",
          );
        });
    } else {
      props.openForm(coordinates);
    }
  }

  function handleCoordinates(position) {
    dispatch(UserActions.setCoordinates(position.coords));
  }

  function handleFailure(message) {
    dispatch(ModalActions.show(
      true,
      message,
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
      <Button onClick={captureLocation}>
        Cases Near Me
      </Button>
    </ButtonContainer>
    <ButtonContainer>
      <Button onClick={captureSymptoms}>
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

