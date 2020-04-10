import React from "react";
import {
  Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";

import LanguageSelect from "./LanguageSelect";
import textLogo from "../images/textLogo.png";

export default function Header() {
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
        <LanguageSelect />
      </NavbarGroup>
    </Navbar>
  );
}
