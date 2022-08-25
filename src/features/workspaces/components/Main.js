import Workspaces from "@mui/icons-material/Workspaces";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import Recent from "./Recent";
import Workspace from "./Workspace";
import AddIcon from "@mui/icons-material/Add";

const Main = () => {
  const user = useSelector((state) => state.userData.user);
  const [workspaces, setWorkspaces] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(2);

  const [newPage, setNewPage] = useState({});

  const addNewPage = (page) => {
    setCounter(counter + 1);
    setShowModal(false);
  };

  useEffect(() => {
    // setWorkspaces(user.workspaces);
    console.log(workspaces);
  }, [user.workspaces]);

  return (
    <div className="mt-10 space-y-4 w-full">
      <div className="flex items-center justify-between lg:pr-32">
        <div className="flex items-center space-x-1">
          <Workspaces className="h-4" />
          <h2 className="font-bold text-gray-600">Your Workspaces</h2>
        </div>

        <div
          onClick={() => setShowModal(true)}
          className="flex items-center px-6 py-1 md:px-8 text-sm bg-blue-600 rounded-md justify-center text-white hover:bg-blue-700 cursor-pointer font-semibold"
        >
          <AddIcon className="h-1" />
          <p>New</p>
        </div>
      </div>

      <div className="">
        {workspaces.length > 0
          ? workspaces.map((workspace) => {
              return (
                <Workspace
                  key={workspace.id}
                  name={workspace.name}
                  projects={workspace.projects}
                />
              );
            })
          : "Create your first workspace"}
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
                setNewPage({
                  id: counter,
                  name: e.target.value,
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
                onClick={() => {
                  addNewPage(newPage);
                }}
                className="w-16 h-6 text-xs md:text-sm bg-blue-600 rounded-md justify-center text-white hover:bg-blue-700 cursor-pointer font-semibold"
              >
                Add
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
