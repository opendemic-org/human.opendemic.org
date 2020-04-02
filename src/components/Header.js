import React from "react";
import { useIntl } from "react-intl";
import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
} from "@blueprintjs/core";

export default function Header() {
  const { formatMessage: fm } = useIntl();

  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT} large={"true"}>
        <NavbarHeading>
          <a href="/" target="_blank">
            <img
              style={{ height: "40px" }}
              src="//d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_06x06y06x02a00002b001.png"
              alt="Opendemic Logo"
              srcSet="//d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_06x06y06x02a00002b001.png 1x, //d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_0du0dw0du04k00004m001.png 2x, //d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_0kr0ku0kr06u00006x001.png 3x"
            />
          </a>
        </NavbarHeading>
        <NavbarDivider />
        <Button
          className="bp3-minimal"
          icon="home"
          text={fm({ id: "navigation.home" })}
        />
      </NavbarGroup>
    </Navbar>
  );
}
