import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Project } from "../../../components/index";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  setActiveWorkspace,
  setUserWorkspaces,
} from "../../../state/features/workspacesDataSlice";
import {
  deleteWorkspace,
  getWorkspaces,
} from "../../../services/firebase/workspaces";
import { auth } from "../../../config/firebase/firebase";

const Workspace = ({ id, name, projects }) => {
  const [user] = useAuthState(auth);

  const activeUser = useSelector((state) => state.userData.user);

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

  const openWorkspace = () => {
    console.log(id, name);
    dispatch(setActiveWorkspace({ id, name }));
    navigate(`/${activeUser.username}/${name}`);
  };

  const deleteUserWorkspace = (id) => {
    deleteWorkspace(id)
      .then(() => {
        getUserWorkspaces(activeUser.username);
      })
      .catch((err) => {
        console.log(err);
      });
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
          <button
            onClick={() => setShowModal(true)}
            className="workspace-button text-red-600"
          >
            <DeleteIcon className="h-4" />
            <p>Delete</p>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end z-50">
        {showModal ? (
          <div className="w-64 h-32 rounded-md bg-gray border-2 p-2 flex flex-col justify-between shadow-md">
            <h1>Are you sure you want to delete workspace?</h1>
            <div className="flex space-x-1 justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="w-16 h-6 text-xs md:text-sm bg-gray-400 rounded-md justify-center text-white hover:bg-gray-500 cursor-pointer font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteUserWorkspace(id);
                }}
                className="w-16 h-6 text-xs md:text-sm bg-red-600 rounded-md justify-center text-white hover:bg-red-700 cursor-pointer font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <div className="card-container">
        {projects.length > 0
          ? projects?.map((project) => {
              return (
                <Project
                  key={project.uid}
                  id={project.uid}
                  name={project.name}
                  workspaceName={name}
                />
              );
            })
          : "Create your first project"}
      </div>
    </div>
  );
};

export default Workspace;
