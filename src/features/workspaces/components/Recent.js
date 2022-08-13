import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Project } from "../../../components/index";
const data = require("../../../data/test.json");

const Recent = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <AccessTimeIcon className="h-6" />
        <h2 className="font-bold">Recently viewed</h2>
      </div>

      <div className="card-container">
        {/* <Project />
        <Project />
        <Project /> */}
        {data.map((project) => {
          return (
            <Project
              key={project.id}
              id={project.id}
              name={project.projectName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recent;
