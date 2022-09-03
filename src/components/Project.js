import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveProject,
  setUserProjects,
} from "../state/features/projectsDataSlice";
import {
  deleteProject,
  getProject,
  getProjects,
} from "../services/firebase/projects";
import { getWorkspaces } from "../services/firebase/workspaces";
import {
  setActiveWorkspace,
  setUserWorkspaces,
} from "../state/features/workspacesDataSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase/firebase";

const Project = ({ id, name, workspaceId, workspaceName }) => {
  const [user] = useAuthState(auth);

  const activeUser = useSelector((state) => state.userData.user);
  const activeWorkspace = useSelector(
    (state) => state.workspacesData.activeWorkspace
  );

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserWorkspaces = (username) => {
    getWorkspaces(username)
      .then((data) => {
        if (user) {
          dispatch(setUserWorkspaces(data));
        }
      })
      .catch((err) => console.log(err));
  };

  const getUserProjects = (workspaceId) => {
    getProjects(workspaceId)
      .then((data) => {
        dispatch(setUserProjects(data));
      })
      .catch((err) => console.log(err));
  };

  const openProject = (id) => {
    getProject(id)
      .then((data) => {
        dispatch(setActiveProject(data));
        if (!activeWorkspace) {
          dispatch(
            setActiveWorkspace({ uid: workspaceId, name: workspaceName })
          );
        }
      })
      .then(() => {
        navigate(`/${activeUser.username}/${workspaceName}/${name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUserProject = (id, name, workspaceId) => {
    deleteProject(id, name, workspaceId)
      .then(() => {
        getUserWorkspaces(activeUser.username);
        getUserProjects(activeWorkspace.uid);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-between w-40 md:w-48 h-24 m-1 bg-white shadow-lg rounded-md p-3 border hover:bg-slate-100 bg-opacity-50 hover:backdrop:duration-100 hover:bg-opacity-100 cursor-pointer">
        <h2 className="font-bold">{name}</h2>
        <div className="flex items-center justify-end">
          <button onClick={() => openProject(id)}>
            <NavigateNextIcon className="text-blue-700 hover:scale-110" />
          </button>

          <button onClick={() => setShowModal(true)}>
            <DeleteIcon className="text-red-500 hover:scale-110" />
          </button>
        </div>
      </div>

      <div className="flex items-center z-50">
        {showModal ? (
          <div className="w-64 h-32 rounded-md bg-gray border-2 p-2 flex flex-col justify-between shadow-md">
            <h1>Are you sure you want to delete project?</h1>
            <div className="flex space-x-1 justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="w-16 h-6 text-xs md:text-sm bg-gray-400 rounded-md justify-center text-white hover:bg-gray-500 cursor-pointer font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteUserProject(id, name, activeWorkspace.uid);
                }}
                className="w-16 h-6 text-xs md:text-sm bg-red-600 rounded-md justify-center text-white hover:bg-red-700 cursor-pointer font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
