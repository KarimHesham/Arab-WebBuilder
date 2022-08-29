import React from "react";
import { Navbar, Sidebar } from "../../../components";
import Main from "./Main";
import "../styles/workspaces.css";

const Workspaces = () => {
  return (
    <>
      <Navbar />
      <div className="flex md:px-36">
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export default Workspaces;
