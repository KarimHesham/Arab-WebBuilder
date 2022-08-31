import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../config/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { getProjects } from "../../../services/firebase/projects";
import { setUserProjects } from "../../../state/features/projectsDataSlice";
import {
  deletePage,
  getPage,
  getPages,
} from "../../../services/firebase/pages";
import {
  setActivePage,
  setUserPages,
} from "../../../state/features/pagesDataSlice";

const Page = ({ id, name, projectName, created }) => {
  const [user] = useAuthState(auth);

  const activeUser = useSelector((state) => state.userData.user);
  const activeWorkspace = useSelector(
    (state) => state.workspacesData.activeWorkspace
  );
  const activeProject = useSelector(
    (state) => state.projectsData.activeProject
  );

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserProjects = (workspaceId) => {
    getProjects(workspaceId)
      .then((data) => {
        if (user) {
          dispatch(setUserProjects(data));
        }
      })
      .catch((err) => console.log(err));
  };

  const getUserPages = (projectId) => {
    getPages(projectId)
      .then((data) => {
        dispatch(setUserPages(data));
      })
      .catch((err) => console.log(err));
  };

  const openPage = (id) => {
    getPage(id)
      .then((data) => {
        dispatch(setActivePage(data));
      })
      .then(() => {
        navigate(
          `/${activeUser.username}/${activeWorkspace.name}/${projectName}/${name}`
        );
      })
      .catch((err) => console.log(err));
  };

  const deleteUserPage = (id, name, projectId) => {
    deletePage(id, name, projectId)
      .then(() => {
        getUserProjects(activeProject.workspaceId);
        getUserPages(activeProject.uid);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="w-36 h-24 md:w-48 md:h-24 bg-white shadow-lg rounded-md px-2 py-1 m-1 flex flex-col justify-between hover:bg-slate-200 border border-gray-200">
        <h2 className="text-sm font-semibold text-center text-gray-600">
          {name}
        </h2>

        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">{created}</p>
          <div className="flex items-center justify-end space-x-1">
            <button onClick={() => openPage(id)}>
              <EditIcon className="text-blue-700 hover:scale-110" />
            </button>
            <button onClick={() => setShowModal(true)}>
              <DeleteIcon className="text-red-500 hover:scale-110" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end z-50">
        {showModal ? (
          <div className="w-64 h-32 rounded-md bg-gray border-2 p-2 flex flex-col justify-between shadow-md">
            <h1>Are you sure you want to delete page?</h1>
            <div className="flex space-x-1 justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="w-16 h-6 text-xs md:text-sm bg-gray-400 rounded-md justify-center text-white hover:bg-gray-500 cursor-pointer font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteUserPage(id, name, activeProject.uid);
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

export default Page;
