import React from "react";
import TabsRender from "./Tabs";

const SidebarDemo = () => {
  return (
    <div className="w-48 md:w-64 h-screen overflow-y-scroll overflow-x-hidden bg-gray-100 border-r-2 rounded-md">
      {/* <button
        onClick={() => setShowModal(true)}
        className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md shadow-md my-6 justify-center text-white w-10/12 mx-auto"
      >
        <AddIcon className="h-4" />
        Add Page
      </button>

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
                  name: e.target.value,
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
                onClick={() => addNewPage(newPage)}
                className="w-16 h-6 text-xs md:text-sm bg-blue-600 rounded-md justify-center text-white hover:bg-blue-700 cursor-pointer font-semibold"
              >
                Add
              </button>
            </div>
          </div>
        ) : null}
      </div> */}
      {/* <div className="flex items-center border-b-2 border-t-2 overflow-x-hidden overflow-y-scroll scroll-smooth">
        <ul className="w-full h-40 border-slate-200">
          {pages?.map((page) => {
            return (
              <Page
                key={page.uid}
                id={page.uid}
                projectName={activeProject.name}
                name={page.name}
              />
            );
          })}
        </ul>
      </div> */}

      <TabsRender />
    </div>
  );
};

export default SidebarDemo;
