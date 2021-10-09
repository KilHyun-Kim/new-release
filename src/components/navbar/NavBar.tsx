import React from "react";
import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../../assets/styles/size";
import ResponsiveRender from "../layout/ResponsiveRender";
import NavbarMobile from "./mobile/NavbarMobile";

const Wrapper = styled.div`
  position: relative;
  height: ${NAVBAR_HEIGHT};
  width: 100%;
`;

export default function NavBar() {
  return (
    <ResponsiveRender
      mobile={() => <NavbarMobile />}
      desktop={() => <Wrapper></Wrapper>}
    ></ResponsiveRender>
  );
}
