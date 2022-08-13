import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import Workspace from "./Workspace";

const workspaces = require("../../data/workspaces.json");

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col">
      <div className="w-60 mt-10 px-4 text-sm">
        <div className="sidebar-item">
          <VisibilityIcon className="h-4" />
          <p>Projects</p>
        </div>
        <div className="sidebar-item">
          <VisibilityIcon className="h-4" />
          <p>Projects</p>
        </div>
        <div className="sidebar-item">
          <VisibilityIcon className="h-4" />
          <p>Home</p>
        </div>
      </div>

      <div className="w-60 mt-4 px-4 space-y-2">
        <div className="flex items-center pl-2 justify-between">
          <h2 className="text-sm">Workspaces</h2>
          <div className="hover:bg-slate-200 p-1">
            <AddIcon className="h-4 cursor-pointer" />
          </div>
        </div>

        <div className="space-y-2">
          {workspaces.length > 0 ? (
            workspaces.map((workspace) => {
              return <Workspace key={workspace.id} name={workspace.name} />;
            })
          ) : (
            <p className="text-sm pl-2">Create your first workspace</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
