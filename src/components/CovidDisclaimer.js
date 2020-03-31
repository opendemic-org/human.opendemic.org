import React, { useState } from "react";
import { Button, Card, Checkbox, Classes, Elevation, H5, Icon, Label, Slider, Switch } from "@blueprintjs/core";

export default function CovidDisclaimer(props) {
  return (
    <Card>
      <H5>
        Confirm Active COVID-19
      </H5>
      <p>
        I understand that by clicking "Agree" my location with be anonymously makred on the Opendemic map.
      </p>
    </Card>
  );
}