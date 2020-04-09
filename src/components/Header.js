import React from "react";
import { useIntl } from "react-intl";
import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";

import LanguageSelect from "./LanguageSelect";
import textLogo from "../images/textLogo.png";

export default function Header() {
  const { formatMessage: fm } = useIntl();

  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT} large={"true"}>
        <NavbarHeading>
          <a href="/" target="_blank">
            <img
              style={{ height: "40px" }}
              src={textLogo}
              alt="Opendemic Logo"
            />
          </a>
        </NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        {/* <Button
          className="bp3-minimal"
          icon="home"
          text={fm({ id: "navigation.home" })}
        /> */}
        <LanguageSelect />
      </NavbarGroup>
    </Navbar>
  );
}
