import React from "react";
import { useSelector } from "react-redux";
import { Alert, Intent } from "@blueprintjs/core";

export default function Modal(props) {
  const isOpen = useSelector(state => state.modal.isVisible);
  const message = useSelector(state => state.modal.message);
  const options = useSelector(state => state.modal.options);
  return (
    <Alert
      canOutsideClickCancel={options.allowClickAway}
      cancelButtonText={options.cancelText}
      confirmButtonText={options.confirmText}
      icon={options.icon}
      intent={options.intent}
      isOpen={isOpen}
      onClose={options.onClose}
      onConfirm={options.onConfirm}
    >
      <p>{message}</p>
    </Alert>
  );
};
