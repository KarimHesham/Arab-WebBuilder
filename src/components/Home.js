import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex text-blue-400 items-center justify-center m-auto h-screen text-xl">
      <div className="flex items-center justify-center flex-col w-1/2 p-2 h-1/2 border  border-slate-400 rounded-md space-y-3 shadow-lg">
        <NavLink to="/login">Get Started</NavLink>
        <NavLink to="/home">Landing</NavLink>
        <NavLink to="/demo">Editor</NavLink>
        <NavLink to="/workspaces">Workspaces</NavLink>
        <NavLink to="/project">Workspace</NavLink>
        <NavLink to="/pages">Project</NavLink>
      </div>
    </div>
  );
};

export default Home;
