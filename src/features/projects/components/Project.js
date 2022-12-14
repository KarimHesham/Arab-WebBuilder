import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Project, Navbar, Sidebar } from "../../../components";
import ConstructionIcon from "@mui/icons-material/Construction";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../config/firebase/firebase";
import { addProject, getProjects } from "../../../services/firebase/projects";
import { setUserProjects } from "../../../state/features/projectsDataSlice";

const Workspace = () => {
  const [user, loading, error] = useAuthState(auth);

  const projects = useSelector((state) => state.projectsData.projects);

  const activeWorkspace = useSelector(
    (state) => state.workspacesData.activeWorkspace
  );

  const [showModal, setShowModal] = useState(false);

  const [newProject, setNewProject] = useState({});

  const dispatch = useDispatch();

  const getUserProjects = (workspaceId) => {
    getProjects(workspaceId)
      .then((data) => {
        dispatch(setUserProjects(data));
      })
      .catch((err) => console.log(err));
  };

  const addNewProject = (project) => {
    addProject(project).then(() => {
      getUserProjects(activeWorkspace.uid);
    });
    setShowModal(false);
  };

  useEffect(() => {
    if (loading || error) return;

    getUserProjects(activeWorkspace.uid);
  }, [user, activeWorkspace, loading, error]);

  return (
    <div>
      <Navbar />
      <div className="flex px-4 md:px-36">
        <Sidebar />

        <div className="mt-10 space-y-4 w-full">
          <div className="flex items-center justify-between lg:pr-32">
            <div className="flex space-x-1 items-center justify-start">
              <ConstructionIcon className="h-4" />
              <h2 className="font-bold text-gray-600">Your Projects</h2>
            </div>

            <div
              onClick={() => setShowModal(true)}
              className="flex items-center px-6 py-1 md:px-8 text-sm md:text-sm bg-blue-600 rounded-md justify-center text-white hover:bg-blue-700 cursor-pointer font-semibold"
            >
              <AddIcon className="h-4" />
              <p>New</p>
            </div>
          </div>

          <div className="flex items-center justify-end z-50">
            {showModal ? (
              <div className="w-64 h-32 rounded-md bg-gray border-2 p-2 flex flex-col justify-between shadow-md">
                <div className="space-y-1">
                  <h2 className="font-bold">Add Project</h2>
                  <hr />
                </div>

                <input
                  className="border-2 border-gray-400 rounded-md px-1 w-full bg-white"
                  placeholder="Enter project name"
                  type="text"
                  onChange={(e) =>
                    setNewProject({
                      name: e.target.value,
                      workspaceId: activeWorkspace.uid,
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
                    onClick={() => addNewProject(newProject)}
                    className="w-16 h-6 text-xs md:text-sm bg-blue-600 rounded-md justify-center text-white hover:bg-blue-700 cursor-pointer font-semibold"
                  >
                    Add
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex flex-wrap">
            {projects.length > 0 ? (
              projects?.map((project) => {
                return (
                  <Project
                    key={project.uid}
                    id={project.uid}
                    name={project.name}
                    workspaceName={activeWorkspace.name}
                  />
                );
              })
            ) : (
              <span>Create your first project</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
