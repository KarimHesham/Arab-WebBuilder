import React, { useState, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import Workspace from "./Workspace";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector((state) => state.userData.user);

  const [workspaces, setWorkspaces] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(5);

  const [newWorkspace, setNewWorkspace] = useState({});

  useEffect(() => {
    setWorkspaces(user.workspaces);
  }, [user.workspaces]);

  const addWorkspace = (workspace) => {
    // workspaces.push(workspace);
    setCounter(counter + 1);
    setShowModal(false);
  };

  return (
    <div className="hidden sm:flex flex-col">
      <div className="w-60 mt-10 px-4 text-sm">
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
      </div>

      <div className="w-60 mt-4 px-4 space-y-2">
        <div className="flex items-center pl-2 justify-between">
          <h2 className="text-sm">Workspaces</h2>
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
                    id: counter,
                    name: e.target.value,
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
                  onClick={() => addWorkspace(newWorkspace)}
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
              return <Workspace key={workspace.id} name={workspace.name} />;
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
