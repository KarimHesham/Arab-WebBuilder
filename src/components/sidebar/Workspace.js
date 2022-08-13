import React from "react";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

const Workspace = ({ id, name }) => {
  return (
    <div className="sidebar-item">
      <WorkspacesIcon className="h-6" />
      <p>{name}</p>
    </div>
  );
};

export default Workspace;
