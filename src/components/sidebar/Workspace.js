import React from "react";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

const Workspace = ({ id, name }) => {
  return (
    <div className="sidebar-item">
      <div className="w-7 h-7 rounded-md bg-blue-600 text-white text-sm flex items-center justify-center font-semibold">
        <p>{name.charAt(0).toUpperCase()}</p>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Workspace;
