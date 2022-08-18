import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Project } from "../../../components/index";
import { useSelector } from "react-redux";

const Recent = () => {
  const user = useSelector((state) => state.userData.user);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(user.workspaces[0].projects);
  }, [user.workspaces]);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <AccessTimeIcon className="h-6" />
        <h2 className="font-bold">Recently viewed</h2>
      </div>

      <div className="card-container">
        {projects.map((project) => {
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
