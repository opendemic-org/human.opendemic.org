import React from "react";
import {
  Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import { useSelector } from "react-redux";

import HeaderShareButtons from "./HeaderShareButtons";
import LanguageSelect from "./LanguageSelect";
import textLogo from "../images/textLogo.png";

export default function Header() {
  const isMobile = useSelector((st) => st.device.isMobile);

  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT} large={"true"}>
        <NavbarHeading>
          <a href="/">
            <img
              style={{ height: "40px" }}
              src={textLogo}
              alt="Opendemic Logo"
            />
          </a>
        </NavbarHeading>
      </NavbarGroup>
      <NavbarGroup className={"od-navbar-right"} align={Alignment.RIGHT}>
        <LanguageSelect />
        <HeaderShareButtons isHeader={true} isMobile={isMobile} />
      </NavbarGroup>
    </Navbar>
  );
}
