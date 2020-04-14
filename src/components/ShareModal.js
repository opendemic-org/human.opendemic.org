import React from "react";
import { Dialog, Overlay } from "@blueprintjs/core";
import { useIntl } from "react-intl";

import HeaderShareButtons from "./HeaderShareButtons";

import { ids } from "../lib/localized/strings";

export default function ShareModal(props) {
  const { formatMessage: fm } = useIntl();
  return (
    /* <Overlay isOpen={true}>
        Overlaid contents...
    </Overlay> */
    <Dialog
      canEscapeKeyClose={true}
      canOutsideClickCancel={true}
      className={"od-modal-center"}
      icon={"share"}
      isCloseButtonShown={true}
      isOpen={true}
      onClose={props.close}
      title={fm({ id: ids.SHARE })}
      usePortal={false}
    >
      <HeaderShareButtons />
    </Dialog>
  );
}
