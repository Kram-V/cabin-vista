import React from "react";
import SideNavigation from "../_components/global/SideNavigation";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] min-h-screen pt-[72px]">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
