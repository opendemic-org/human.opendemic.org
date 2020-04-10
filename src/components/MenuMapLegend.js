import React, { Fragment } from "react";
import { Icon, MenuDivider } from "@blueprintjs/core";
import { useIntl } from "react-intl";

import { ids } from "../lib/localized/strings";

export default function MenuMapLegend() {
  const { formatMessage: fm } = useIntl();

  const LEVELS = [
    {
      label: fm({ id: ids.LEGEND_RISK_LEVEL }, { number: 1 }),
      color: "#fed977",
    },
    {
      label: fm({ id: ids.LEGEND_RISK_LEVEL }, { number: 2 }),
      color: "#feb24c",
    },
    {
      label: fm({ id: ids.LEGEND_RISK_LEVEL }, { number: 3 }),
      color: "#fd8d3d",
    },
    {
      label: fm({ id: ids.LEGEND_SELF_CASE }),
      color: "#fc4e2b",
    },
    {
      label: fm({ id: ids.LEGEND_OFFICIAL_CASE }),
      color: "#3a5896",
    },
  ];

  function render() {
    return LEVELS.map((level, i) => {
      return renderRiskLevel(level);
    });
  }

  function renderRiskLevel(level) {
    return (
      <li>
        <div className={"bp3-menu-item od-menu-item-no-click"}>
          <Icon color={level["color"]} icon={"symbol-square"} />
          <div className={"bp3-text-oveflow-ellipsis bp3-fill"}>
            {level["label"]}
          </div>
        </div>
      </li>
    );
  }

  return (
    <Fragment>
      <MenuDivider title={fm({ id: ids.LEGEND })} />
      {render()}
    </Fragment>
  );
}
