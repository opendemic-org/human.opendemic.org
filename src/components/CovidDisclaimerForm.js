import React from "react";
import { Button, Card, H5 } from "@blueprintjs/core";
import { useIntl } from "react-intl";

import { ids } from "../lib/localized/strings";

export default function CovidDisclaimerForm(props) {
  const { formatMessage: fm } = useIntl();

  const terms = (
    <a href="https://www.opendemic.org/terms/" target="_blank">
      {fm({ id: ids.TERMS_OF_USE_LINK })}
    </a>
  );

  return (
    <Card>
      <H5>{fm({ id: ids.SYMPTOMS_FORM_COVID_DISCLAIMER_HEADER })}</H5>
      <p>{fm({ id: ids.SYMPTOMS_FORM_COVID_DISCLAIMER }, { terms })}</p>
      <Button text={fm({ id: ids.AGREE })} onClick={props.submit} />
    </Card>
  );
}
