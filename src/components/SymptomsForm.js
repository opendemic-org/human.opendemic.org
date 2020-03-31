import React, { useState } from "react";
import { Button, Card, Checkbox, Classes, Elevation, H5, Icon, Label, Slider, Switch } from "@blueprintjs/core";

export default function SymptomsForm(props) {
  const [cough, setCough] = useState(false);
  const [fever, setFever] = useState(false);
  const [shortBreath, setShortBreath] = useState(false);

  function handleCheckbox(e) {
    switch (e.target.id) {
      case "cough":
        setCough(e.target.checked);
        break;
      case "fever":
        setFever(e.target.checked);
        break;
      case "shortBreath":
        setShortBreath(e.target.checked);
        break;
      default:
        break;
    }
  }

  function handleConfirmedCovid() {
    props.onConfirmedCovid();
  }

  return (
    <Card>
        <H5>
          <a href="#">Which symptoms are you currently experiencing?</a>
        </H5>
        <Checkbox id="fever" label="Fever" onChange={handleCheckbox}>
        </Checkbox>
        <Checkbox id="shortBreath" label="Shortness of Breath" onChange={handleCheckbox}>
        </Checkbox>
        <Checkbox id="cough" label="Cough" onChange={handleCheckbox}>
        </Checkbox>
        <Button text="I am confirmed to have COVID-19" onClick={handleConfirmedCovid} />
    </Card>
  );
}