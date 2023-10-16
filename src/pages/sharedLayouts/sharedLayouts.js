import React from "react";
import { SharedComp } from "../../components";
import { Outlet } from "react-router-dom";

const SharedLayouts = () => {
  return (
    <>
      <SharedComp />
      <Outlet />
    </>
  );
};

export default SharedLayouts;
