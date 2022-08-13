import { ChartSquareBarIcon } from "@heroicons/react/outline";
import { EyeIcon, PlusIcon } from "@heroicons/react/solid";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

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
          <div className="sidebar-item">
            <WorkspacesIcon className="h-6" />
            <p>Workspace Name</p>
          </div>
          <div className="sidebar-item">
            <WorkspacesIcon className="h-6" />
            <p>Workspace Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
