import React from "react";
import { Button, Card, H5 } from "@blueprintjs/core";
import { useIntl } from "react-intl";

import { ids } from "../lib/localized/strings";

export default function ThankYouForm(props) {
  const { formatMessage: fm } = useIntl();
  return (
    <Card>
      <H5>{fm({ id: ids.SYMPTOMS_FORM_THANK_YOU_HEADER })}</H5>
      <p>{fm({ id: ids.SYMPTOMS_FORM_THANK_YOU })}</p>
      <Button text={fm({ id: ids.DONE })} onClick={props.submit} />
    </Card>
  );
}
