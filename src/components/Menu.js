import React from "react";
import { Button, Spinner } from "@blueprintjs/core";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { ids } from "../lib/localized/strings";
import LoaderActions from "../store/loader";
import MapActions from "../store/map";
import ModalActions from "../store/modal";
import UserActions from "../store/user";
import { getCurrentPosition } from "../utils/geolocation";

export default function Menu(props) {
  const { formatMessage: fm } = useIntl();

  const dispatch = useDispatch();

  const fingerprint = useSelector((st) => st.user.fingerprint);

  async function captureLocation() {
    dispatch(LoaderActions.show(true));
    await getCurrentPosition()
      .then(loadMapData)
      .then(() => {
        dispatch(LoaderActions.show(false));
      })
      .catch(() => {
        handleFailure("Geolocation must be enabled to view cases near you.");
      });
  }

  async function captureSymptoms() {
    dispatch(LoaderActions.show(true));
    await getCurrentPosition()
      .then(props.openForm)
      .then(() => {
        dispatch(LoaderActions.show(false));
      })
      .catch(() => {
        handleFailure(
          "Please enable geolocation access so we can accurately log your symptoms."
        );
      });
  }

  function loadMapData(position) {
    dispatch(UserActions.setCoordinates(position.coords));
    dispatch(
      MapActions.getDataPoints({
        fingerprint,
        coordinates: position.coords,
      })
    );
  }

  function handleFailure(message) {
    dispatch(
      ModalActions.show(true, message, {
        icon: "error",
        confirmText: "Ok",
        onClose: () => {
          dispatch(ModalActions.show(false));
        },
        onConfirm: () => {
          dispatch(ModalActions.show(false));
        },
      })
    );
  }

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={captureLocation}>
          {fm({ id: ids.CASES_NEAR_ME_BUTTON })}
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button onClick={captureSymptoms}>
          {fm({ id: ids.LOG_SYMPTOMS_BUTTON })}
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
