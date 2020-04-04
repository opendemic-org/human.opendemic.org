import React, { useState } from "react";
import { Button, Card, Checkbox, H5 } from "@blueprintjs/core";
import { useIntl } from "react-intl";

import TextDivider from "./TextDivider";
import { ids } from "../lib/localized/strings";

export default function SymptomsForm(props) {
  const { formatMessage: fm } = useIntl();

  const [errorMessage, setErrorMessage] = useState(null);
  const [submitButtonVisible, setSubmitButtonVisible] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    cough: null,
    fever: null,
    shortBreath: null,
  });
  const [confirmedCovid, setConfirmedCovid] = useState(false);

  function submit(e) {
    if (e === true || canSubmit()) {
      const data = {
        ...selectedCheckboxes,
        confirmedCovid: e === true ? true : false,
      };
      props.submit(data);
    } else {
      setErrorMessage("Please select an option");
    }
  }

  function canSubmit() {
    return confirmedCovid || checkAnyCheckboxSelected();
  }

  function checkAnyCheckboxSelected() {
    return Object.keys(selectedCheckboxes).some((key) => {
      return selectedCheckboxes[key] === true;
    });
  }

  function handleConfirmedCovid() {
    setConfirmedCovid(true);
    submit(true);
  }

  function handleCheckbox(e) {
    const checkboxes = selectedCheckboxes;
    checkboxes[e.target.id] = e.target.checked;
    setSelectedCheckboxes(checkboxes);
    if (!submitButtonVisible) {
      setSubmitButtonVisible(true);
    }
  }

  function renderErrorMessage() {
    return <div>{errorMessage}</div>;
  }

  function renderSubmitButton() {
    return <Button text="Continue" onClick={submit} />;
  }

  return (
    <Card>
      <H5>{fm({ id: ids.SYMPTOMS_FORM_QUESTION_WHICH })}</H5>
      {errorMessage && renderErrorMessage()}
      <Checkbox
        id="fever"
        label={fm({ id: ids.SYMPTOMS_FEVER })}
        onChange={handleCheckbox}
      />
      <Checkbox
        id="shortBreath"
        label={fm({ id: ids.SYMPTOMS_SHORT_BREATH })}
        onChange={handleCheckbox}
      />
      <Checkbox
        id="cough"
        label={fm({ id: ids.SYMPTOMS_COUGH })}
        onChange={handleCheckbox}
      />
      {submitButtonVisible && renderSubmitButton()}
      <H5>
        <TextDivider text={fm({ id: ids.OR })} />
      </H5>
      <Button
        text={fm({ id: ids.SYMPTOMS_FORM_CONFIRMED_COVID })}
        onClick={handleConfirmedCovid}
      />
    </Card>
  );
}
