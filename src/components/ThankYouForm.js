import React from "react";
import {
  Button,
  Card,
  Checkbox,
  Classes,
  Elevation,
  H5,
  Icon,
  Label,
  Slider,
  Switch,
} from "@blueprintjs/core";

export default function ThankYouForm(props) {
  return (
    <Card>
      <H5>Thank you!</H5>
      <p>Thank you for contributing your data. Please remember to stay home!</p>
      <Button text="Done" onClick={props.submit} />
    </Card>
  );
}