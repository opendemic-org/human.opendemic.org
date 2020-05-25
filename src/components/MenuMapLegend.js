import React, { Fragment, useState } from "react";
import { Collapse, Icon, MenuDivider } from "@blueprintjs/core";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { ids } from "../lib/localized/strings";

export default function MenuMapLegend() {
  const { formatMessage: fm } = useIntl();

  const isMobile = useSelector((st) => st.device.isMobile);

  const [dropdownIsOpen, setDropdownIsOpen] = useState(true);

  const LEVELS = [
    {
      id: 1,
      label: fm({ id: ids.LEGEND_RISK_LEVEL_LOW }),
      color: "#ffff00",
    },
    {
      id: 2,
      label: fm({ id: ids.LEGEND_RISK_LEVEL_MEDIUM }),
      color: "#ffbf00",
    },
    {
      id: 3,
      label: fm({ id: ids.LEGEND_RISK_LEVEL_HIGH }),
      color: "#ff6a00",
    },
    {
      id: 4,
      label: fm({ id: ids.LEGEND_SELF_CASE }),
      color: "#ff0000",
    },
    {
      id: 5,
      label: fm({ id: ids.LEGEND_OFFICIAL_CASE }),
      color: "#3a5896",
    },
  ];

  function renderRiskLevels() {
    return LEVELS.map((level, i) => {
      return renderLevel(level);
    });
  }

  function renderLevel(level) {
    return (
      <li>
        <div className={"bp3-menu-item od-menu-item-no-click"}>
          <StyledIcon color={level["color"]} icon={"symbol-square"} />
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
        <MenuDivider className="od-cursor-pointer" title={renderTitle()} />
      </HeaderContainer>
      <Collapse
        isOpen={dropdownIsOpen}
        keepChildrenMounted={true}
        transitionDuration={400}
      >
        {renderRiskLevels()}
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

const StyledIcon = styled(Icon)`
  background-color: black;
  border-radius: 2px;
`;
