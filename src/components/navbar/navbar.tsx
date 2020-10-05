import React, { ReactNode } from "react";
import {
  Alignment,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";

interface Props {
  children?: ReactNode;
}

export const Nav = ({ children }: Props) => {
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Iframe Tester</NavbarHeading>
        <NavbarDivider />
      </NavbarGroup>
      {children}
    </Navbar>
  );
};
