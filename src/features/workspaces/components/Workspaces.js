import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "../../../components/Sidebar";

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
