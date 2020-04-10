import React from "react";
import { Icon, Menu, MenuItem, MenuDivider } from "@blueprintjs/core";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import MenuMapLegend from "./MenuMapLegend";
import { ids } from "../lib/localized/strings";
import LoaderActions from "../store/loader";
// import MapActions from "../store/map";
import ModalActions from "../store/modal";
import UserActions from "../store/user";
import { getCurrentPosition } from "../utils/geolocation";

export default function MainMenu(props) {
  const { formatMessage: fm } = useIntl();

  const dispatch = useDispatch();

  // const fingerprint = useSelector((st) => st.user.fingerprint);

  async function captureLocation() {
    dispatch(LoaderActions.show(true, { component: "Map" }));
    await getCurrentPosition()
      .then(loadMapData)
      .then(() => {
        dispatch(LoaderActions.show(false, { hideIfReady: true }));
      })
      .catch(() => {
        handleFailure(fm({ id: ids.ENABLE_GEOLOCATION_CASES_NEAR_ME }));
      });
  }

  async function captureSymptoms() {
    dispatch(LoaderActions.show(true, { component: "Map" }));
    await getCurrentPosition()
      .then((position) => {
        loadMapData(position);
        props.openForm(position);
      })
      .then(() => {
        dispatch(LoaderActions.show(false, { hideIfReady: true }));
      })
      .catch(() => {
        handleFailure(fm({ id: ids.ENABLE_GEOLOCATION_LOG_SYMPTOMS }));
      });
  }

  function loadMapData(position) {
    dispatch(UserActions.setCoordinates(position.coords));
    // TODO: Enable when not using iframe
    // dispatch(
    //   MapActions.getDataPoints({
    //     fingerprint,
    //     coordinates: position.coords,
    //   })
    // );
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
      <Menu>
        <MenuMapLegend />
        <MenuDivider title={fm({ id: ids.ACTIONS })} />
        <MenuItem
          onClick={captureLocation}
          active
          text={fm({ id: ids.CASES_NEAR_ME_BUTTON })}
          labelElement={<Icon icon="geolocation" />}
        />
        <div className={"bp3-menu-divider od-menu-divider-invisible"} />
        <MenuItem
          onClick={captureSymptoms}
          active
          text={fm({ id: ids.LOG_SYMPTOMS_BUTTON })}
          labelElement={<Icon icon="add" />}
        />
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px 10px 10px 10px;
  position: absolute;
  z-index: 2;
`;
