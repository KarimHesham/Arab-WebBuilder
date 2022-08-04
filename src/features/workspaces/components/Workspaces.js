import React from "react";
import { Navbar, Sidebar } from "../../../components";
import Main from "./Main";

const Workspaces = () => {
  return (
    <>
      <Navbar />
      <div className="flex px-2 md:px-36 ">
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export default Workspaces;
