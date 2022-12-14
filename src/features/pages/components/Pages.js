import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Sidebar } from "../../../components";
import Page from "./Page";
import AddIcon from "@mui/icons-material/Add";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { addPage, getPages } from "../../../services/firebase/pages";
import { setUserPages } from "../../../state/features/pagesDataSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase/firebase";

const Pages = () => {
  const [user, loading, error] = useAuthState(auth);

  const activeWorkspace = useSelector(
    (state) => state.workspacesData.activeWorkspace
  );
  const activeProject = useSelector(
    (state) => state.projectsData.activeProject
  );
  const pages = useSelector((state) => state.pagesData.pages);

  const [showModal, setShowModal] = useState(false);

  const [newPage, setNewPage] = useState({});

  const dispatch = useDispatch();

  const getUserPages = (projectId) => {
    getPages(projectId)
      .then((data) => {
        dispatch(setUserPages(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewPage = (page) => {
    addPage(page)
      .then(() => {
        getUserPages(activeProject.uid);
      })
      .catch((err) => {
        console.log(err);
      });
    setShowModal(false);
  };

  useEffect(() => {
    if (loading || error) return;

    getUserPages(activeProject.uid);
  }, [user, activeProject, loading, error]);

  return (
    <>
      <Navbar />
      <div className="flex md:px-36 p-6">
        <Sidebar />

        <div className="mt-10 space-y-4 w-full">
          <div className="flex items-center justify-between lg:pr-32">
            <div className="flex items-center space-x-1">
              <AutoStoriesIcon className="h-4" />
              <h2 className="font-bold text-gray-600">Your pages</h2>
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
                  <h2 className="font-bold">Add Page</h2>
                  <hr />
                </div>

                <input
                  className="border-2 border-gray-400 rounded-md px-1 w-full bg-white"
                  placeholder="Enter page name"
                  type="text"
                  onChange={(e) =>
                    setNewPage({
                      name: e.target.value,
                      workspaceId: activeWorkspace.uid,
                      projectId: activeProject.uid,
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

          <div className="">
            {pages.length > 0
              ? pages?.map((page) => {
                  return (
                    <Page
                      key={page.uid}
                      id={page.uid}
                      name={page.name}
                      projectName={activeProject?.name}
                      created={page.createdAt}
                    />
                  );
                })
              : "Create your first page"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
