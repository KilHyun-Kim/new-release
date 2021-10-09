import React from "react";
import styled from "styled-components";
import { center } from "../../../assets/styles/mixin/centered";
import { NAVBAR_HEIGHT_MOBILE } from "../../../assets/styles/size";

const Wrap = styled.div`
  width: 100%auto;
  height: ${NAVBAR_HEIGHT_MOBILE};
`;

const Inner = styled.div`
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: ${NAVBAR_HEIGHT_MOBILE};
  border-bottom: 1px solid #f4f6f8;
  width: 100%;
  padding-left: 11px;
  padding-right: 17px;
  margin-right: auto;
  background: #fff;
`;

const Title = styled.div`
  ${center()}
`;
export const NavbarMobileContext = React.createContext({
  isSidebarOpen: false,
  toggleSidebar: () => undefined,
});

const NavbarMobile = () => {
  const [isSidebarOpen, toggleSidebar] = useToggle();
  return (
    <NavbarMobileContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
      }}
    >
      <Wrap>
        <Inner>
          <Title></Title>
        </Inner>
      </Wrap>
    </NavbarMobileContext.Provider>
  );
};

export default NavbarMobile;
