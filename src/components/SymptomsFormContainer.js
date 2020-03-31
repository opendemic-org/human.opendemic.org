import React, { useState } from "react";
import { Alert, Intent } from "@blueprintjs/core";

import CovidDisclaimer from "./CovidDisclaimer";
import SymptomsForm from "./SymptomsForm";

const steps = {
  SUBMIT: 3,
  COVID_DISCLAIMER: 4,
};

export default function SymptomsFormContainer(props) {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  function handleStep() {
    setStep(step + 1);
  }

  function handleCancel() {
    props.close();
  }

  function handleClose() {
    if (step === steps.SUBMIT) {
      props.close();
    }
  }

  function handleConfirmedCovid() {
    setStep(steps.COVID_DISCLAIMER);
  }

  return (
    <Alert
      canOutsideClickCancel={false}
      cancelButtonText={"Exit"}
      confirmButtonText={"Continue"}
      icon={null}
      intent={null}
      isOpen={isOpen}
      onCancel={handleCancel}
      onClose={handleClose}
      onConfirm={handleStep}
    >
      {step === 1 && <SymptomsForm onConfirmedCovid={handleConfirmedCovid} />}
      {step === 4 && <CovidDisclaimer />}
    </Alert>
  );
};
