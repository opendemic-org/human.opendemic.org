import React, { Fragment, useState } from "react";
import { Collapse, Icon, MenuDivider } from "@blueprintjs/core";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { ids } from "../lib/localized/strings";

export default function MenuMapLegend() {
  const { formatMessage: fm } = useIntl();

  const isMobile = useSelector((st) => st.device.isMobile);

  const [dropdownIsOpen, setDropdownIsOpen] = useState(!isMobile);

  const LEVELS = [
    {
      id: 1,
      label: fm({ id: ids.LEGEND_RISK_LEVEL }, { number: 1 }),
      color: "#fed977",
    },
    {
      id: 2,
      label: fm({ id: ids.LEGEND_RISK_LEVEL }, { number: 2 }),
      color: "#feb24c",
    },
    {
      id: 3,
      label: fm({ id: ids.LEGEND_RISK_LEVEL }, { number: 3 }),
      color: "#fd8d3d",
    },
    {
      id: 4,
      label: fm({ id: ids.LEGEND_SELF_CASE }),
      color: "#fc4e2b",
    },
    {
      id: 5,
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

  function toggleDropdown() {
    setDropdownIsOpen(!dropdownIsOpen);
  }

  function renderTitle() {
    return (
      <Fragment>
        <TitleContainer>{fm({ id: ids.LEGEND })}</TitleContainer>
        <Icon
          icon={"caret-right"}
          className={`od-dropdown-caret-rotated-${dropdownIsOpen}`}
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <HeaderContainer onClick={toggleDropdown}>
        <MenuDivider title={renderTitle()} />
      </HeaderContainer>
      <Collapse
        isOpen={dropdownIsOpen}
        keepChildrenMounted={true}
        transitionDuration={400}
      >
        {render()}
      </Collapse>
    </Fragment>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleContainer = styled.span`
  margin-right: 7px;
`;
