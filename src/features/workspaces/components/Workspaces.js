import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Workspaces = () => {
  return (
    <div>
      <Navbar />

      <div className="px-1">
        <Sidebar />
      </div>
    </div>
  );
};

export default Workspaces;
