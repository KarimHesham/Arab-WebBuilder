import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveProject } from "../state/features/projectsDataSlice";
import { getProject } from "../services/firebase/projects";

const Project = ({ id, name, workspaceName }) => {
  const activeUser = useSelector((state) => state.userData.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openProject = () => {
    console.log(workspaceName);

    getProject(id)
      .then((data) => {
        dispatch(setActiveProject(data));
      })
      .then(() => {
        navigate(`/${activeUser.username}/${workspaceName}/${name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      onClick={() => openProject()}
      className="flex flex-col justify-between w-40 md:w-48 h-24 m-1 bg-white shadow-lg rounded-md p-3 border hover:bg-slate-100 bg-opacity-50 hover:backdrop:duration-100 hover:bg-opacity-100 cursor-pointer"
    >
      <h2 className="font-bold">{name}</h2>
      <div className="flex items-center justify-end">
        <EditIcon className="text-blue-700 hover:scale-110" />

        <DeleteIcon className="text-red-500 hover:scale-110" />
      </div>
    </div>
  );
};

export default Project;
