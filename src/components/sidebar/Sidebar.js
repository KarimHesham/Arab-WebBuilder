import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Workspace from "./Workspace";
import { useSelector } from "react-redux";
import { addWorkspace } from "../../services/firebase/workspaces";

const Sidebar = () => {
  const user = useSelector((state) => state.userData.user);
  const workspaces = useSelector((state) => state.workspacesData.workspaces);

  const [showModal, setShowModal] = useState(false);

  const [newWorkspace, setNewWorkspace] = useState({});

  const addNewWorkspace = (workspace) => {
    addWorkspace(workspace);
    setShowModal(false);
  };

  return (
    <div className="hidden sm:flex flex-col mt-10">
      {/* <div className="w-60 mt-10 px-4 text-sm">
        <div className="sidebar-item">
          <VisibilityIcon className="h-4" />
          <p>Projects</p>
        </div>
        <div className="sidebar-item">
          <VisibilityIcon className="h-4" />
          <p>Projects</p>
        </div>
        <div className="sidebar-item">
          <VisibilityIcon className="h-4" />
          <p>Home</p>
        </div>
      </div> */}

      <div className="w-60 px-4 space-y-2">
        <div className="flex items-center pl-2 justify-between">
          <h2 className="text-sm font-semibold">Workspaces</h2>
          <div className="hover:bg-slate-200 p-1">
            <button
              className="cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <AddIcon className="h-4 " />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center z-50">
          {showModal ? (
            <div className="w-64 h-32 rounded-md bg-gray border-2 p-2 flex flex-col justify-between shadow-md">
              <div className="space-y-1">
                <h2 className="font-bold">Add Workspace</h2>
                <hr />
              </div>

              <input
                className="border-2 border-gray-400 rounded-md px-1 w-full bg-white"
                placeholder="Enter workspace name"
                type="text"
                onChange={(e) =>
                  setNewWorkspace({
                    name: e.target.value,
                    username: user.email.split("@")[0],
                    createdAt: new Date().toLocaleDateString(),
                  })
                }
              />

              <div className="flex space-x-1 justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-16 h-6 text-xs md:text-sm bg-gray-400 rounded-md justify-center text-white hover:bg-gray-500 cursor-pointer font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={() => addNewWorkspace(newWorkspace)}
                  className="w-16 h-6 text-xs md:text-sm bg-blue-600 rounded-md justify-center text-white hover:bg-blue-700 cursor-pointer font-semibold"
                >
                  Add
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="space-y-2">
          {workspaces.length > 0 ? (
            workspaces.map((workspace) => {
              return <Workspace key={workspace.uid} name={workspace.name} />;
            })
          ) : (
            <p className="text-sm pl-2">Create your first workspace</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
