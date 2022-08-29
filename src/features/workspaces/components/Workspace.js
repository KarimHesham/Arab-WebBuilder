import React from "react";
import { Project } from "../../../components/index";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveWorkspace } from "../../../state/features/workspacesDataSlice";

const Workspace = ({ id, name, projects }) => {
  const activeUser = useSelector((state) => state.userData.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openWorkspace = () => {
    console.log(id, name);
    dispatch(setActiveWorkspace(id));
    navigate(`/${activeUser.username}/${name}`);
  };

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
          <button onClick={() => openWorkspace()} className="workspace-button">
            <ViewModuleIcon className="h-4" />
            <p>Projects</p>
          </button>
          <button className="workspace-button text-red-600">
            <DeleteIcon className="h-4" />
            <p>Delete</p>
          </button>
        </div>
      </div>
      <div className="card-container">
        {projects.length > 0
          ? projects?.map((project) => {
              return <Project key={project.uid} id={project.uid} name={project.name} />;
            })
          : "Create your first project"}
      </div>
    </div>
  );
};

export default Workspace;
