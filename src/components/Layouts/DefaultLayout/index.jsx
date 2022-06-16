import NavBar from "./Navigation/NavBar";

import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default DefaultLayout;
