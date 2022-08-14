import React from "react";
import { Project } from "../../../components/index";
import GamepadIcon from "@mui/icons-material/Gamepad";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

const Workspace = ({ id, name, projects }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between md:space-x-16 space-y-2">
        <div className="flex items-center justify-start space-x-1">
          <WorkspacesIcon className="h-8" />
          <h2 className="font-bold">{name}</h2>
        </div>
        <div className="flex items-center flex-wrap">
          <div className="workspace-button">
            <GamepadIcon className="h-4" />
            <p>Button</p>
          </div>
          <div className="workspace-button">
            <GamepadIcon className="h-4" />
            <p>Button</p>
          </div>
          <div className="workspace-button">
            <GamepadIcon className="h-4" />
            <p>Button</p>
          </div>
          <div className="workspace-button">
            <GamepadIcon className="h-4" />
            <p>Button</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        {projects.length > 0
          ? projects.map((project) => {
              return <Project key={project.id} name={project.name} />;
            })
          : "Create your first project"}
      </div>
    </div>
  );
};

export default Workspace;
