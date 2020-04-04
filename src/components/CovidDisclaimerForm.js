import React from "react";
import { Button, Card, H5 } from "@blueprintjs/core";

export default function CovidDisclaimerForm(props) {
  return (
    <Card>
      <H5>Confirm Active COVID-19</H5>
      <p>
        I understand that by clicking "Agree" my location with be anonymously
        marked on the Opendemic map.
      </p>
      <Button text="Agree" onClick={props.submit} />
    </Card>
  );
}
