import React, { useState } from "react";
import { Button, Card, Checkbox, Divider, H5 } from "@blueprintjs/core";

export default function SymptomsForm(props) {
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
        confirmedCovid,
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
      <H5>Which symptoms are you currently experiencing?</H5>
      {errorMessage && renderErrorMessage()}
      <Checkbox id="fever" label="Fever" onChange={handleCheckbox}></Checkbox>
      <Checkbox
        id="shortBreath"
        label="Shortness of Breath"
        onChange={handleCheckbox}
      ></Checkbox>
      <Checkbox id="cough" label="Cough" onChange={handleCheckbox}></Checkbox>
      {submitButtonVisible && renderSubmitButton()}
      <Divider />
      <Button
        text="I am confirmed to have COVID-19"
        onClick={handleConfirmedCovid}
      />
    </Card>
  );
}
