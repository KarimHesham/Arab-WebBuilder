import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPages,
  addPage,
  removePage,
  getPages,
  selectPages,
} from "../../../state/features/pages/userPagesSlice";
import { Navbar, Sidebar } from "../../../components";
import Page from "./Page";
import AddIcon from "@mui/icons-material/Add";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
const project = require("../../../data/project.json");

const Pages = () => {
  const pages = useSelector((state) => state.userPages.pages);

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(2);

  const [newPage, setNewPage] = useState({});

  useEffect(() => {
    dispatch(setPages(project.pages));

    console.log(pages);
  }, [dispatch]);

  const addNewPage = (page) => {
    dispatch(addPage(page));
    setCounter(counter + 1);
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex md:px-36 p-6">
        <Sidebar />

        <div className="mt-10 space-y-4 w-full">
          <div className="flex items-center justify-between md:pr-32">
            <div className="flex items-center space-x-1">
              <AutoStoriesIcon className="h-4" />
              <h2>Your pages</h2>
            </div>

            <div
              onClick={() => setShowModal(true)}
              className="flex items-center w-16 h-6 md:w-24 md:h-8 text-xs md:text-sm bg-blue-600 rounded-md justify-center text-white hover:bg-blue-700 cursor-pointer font-semibold"
            >
              <AddIcon className="h-4" />
              <p>New</p>
            </div>
          </div>

          <div className="card-container">
            {pages.length > 0
              ? pages.map((page) => {
                  return (
                    <Page
                      key={page.id}
                      name={page.name}
                      created={page.createdAt}
                    />
                  );
                })
              : "Create your first page"}
          </div>

          <div className="flex items-center justify-center z-50">
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
      </div>
    </>
  );
};

export default Pages;
