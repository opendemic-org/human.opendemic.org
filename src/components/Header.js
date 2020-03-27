import React from "react";
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
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT} large={"true"}>
        <NavbarHeading>
          <a href="clkn/https/www.opendemic.org/" target="_self">
            <img
              src="//d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_06x06y06x02a00002b001.png"
              alt="Opendemic Logo"
              data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_06x06y06x02a00002b001.png"
              data-src-desktop-2x="//d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_0du0dw0du04k00004m001.png"
              data-src-desktop-3x="//d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_0kr0ku0kr06u00006x001.png"
              data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_05805605801s00001q001.png"
              data-src-mobile-2x="//d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_0ag0ac0ag03k00003g001.png"
              data-src-mobile-3x="//d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_0fo0fi0fo05c000056001.png"
              srcSet="//d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_06x06y06x02a00002b001.png 1x, //d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_0du0dw0du04k00004m001.png 2x, //d9hhrg4mnvzow.cloudfront.net/www.opendemic.org/38066938-opendemic-logo_0kr0ku0kr06u00006x001.png 3x"
            />
          </a>
          </NavbarHeading>
        <NavbarDivider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="document" text="Files" />
      </NavbarGroup>
    </Navbar> 
  );
}
