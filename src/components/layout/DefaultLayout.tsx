import React from "react";
import NavBar from "../navbar/NavBar";

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
};

export default DefaultLayout;
