import React from "react";
import { Project, Navbar, Sidebar } from "../../../components";
import ConstructionIcon from "@mui/icons-material/Construction";

const workspace = require("../../../data/workspace.json");

const Workspace = () => {
  return (
    <div>
      <Navbar />
      <div className="flex px-4 md:px-36">
        <Sidebar />

        <div className="mt-10 space-y-4">
          <div className="flex space-x-1 items-center justify-start">
            <ConstructionIcon className="h-4" />
            <h2 className="font-bold text-gray-600">Your Projects</h2>
          </div>
          <div className="flex flex-wrap">
            {workspace.projects.map((project) => {
              return <Project key={project.id} name={project.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
