import React from "react";
import { Project } from "../../../components/index";
import GamepadIcon from "@mui/icons-material/Gamepad";

const Workspace = ({ id, name, projects }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between md:space-x-16 space-y-2">
        <div className="flex items-center justify-start space-x-1">
          <div className="w-8 h-8 rounded-md bg-blue-600 text-white text-lg flex items-center justify-center font-semibold">
            <p>{name.charAt(0).toUpperCase()}</p>
          </div>
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
        {projects?.length > 0
          ? projects.map((project) => {
              return <Project key={project.id} name={project.name} />;
            })
          : "Create your first project"}
      </div>
    </div>
  );
};

export default Workspace;
