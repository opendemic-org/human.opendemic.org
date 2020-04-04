import React, { useState } from "react";
import { Alert, Button, Dialog } from "@blueprintjs/core";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";

import CovidDisclaimerForm from "./CovidDisclaimerForm";
import SymptomsForm from "./SymptomsForm";
import ThankYouForm from "./ThankYouForm";

import * as requests from "../lib/http/requests";

const steps = {
  ERROR: 0, // TODO: Handle this error case
  SYMPTOMS: 1,
  COVID_DISCLAIMER: 5,
  THANK_YOU: 10,
};

/**
 * A multi-form that manages the flow and data of its sub-forms.
 *
 */
export default function SymptomsFormContainer(props) {
  const { formatMessage: fm } = useIntl();

  const fingerprint = useSelector((state) => state.user.fingerprint);

  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    coordinates: props.coordinates,
    fingerprint,
  });

  function handleStep() {
    setStep(step + 1);
  }

  function handleClose() {
    props.close();
  }

  function handleSubmit(data) {
    const nextFormData = {
      ...formData,
      ...data,
    };
    setFormData(nextFormData);

    switch (step) {
      case steps.SYMPTOMS:
        if (data.confirmedCovid === true) {
          setStep(steps.COVID_DISCLAIMER);
        } else {
          submitAll(nextFormData);
        }
        break;
      case steps.COVID_DISCLAIMER:
        submitAll(nextFormData);
      default:
        handleStep();
        break;
    }
  }

  function submitAll(reqData) {
    requests.postSymptoms(reqData).then((respData) => {
      if (respData) {
        setStep(steps.THANK_YOU);
      }
    });
    setStep();
  }

  return (
    <Dialog
      canEscapeKeyClose={true}
      canOutsideClickCancel={true}
      className={""}
      icon={null}
      isCloseButtonShown={true}
      isOpen={isOpen}
      onClose={handleClose}
      onConfirm={handleStep}
      title={fm({ id: "log.symptoms.button" })}
      usePortal={false}
    >
      {step === 1 && <SymptomsForm submit={handleSubmit} />}
      {step === 5 && <CovidDisclaimerForm submit={handleSubmit} />}
      {step === 10 && <ThankYouForm submit={handleClose} />}
    </Dialog>
  );
}
