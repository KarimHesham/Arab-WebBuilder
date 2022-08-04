import React from "react";
import { Navbar, Sidebar } from "../../../components";
import Main from "./Main";

const Workspaces = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export default Workspaces;
