import React from "react";
import Page from "./Page";
import TabsRender from "./Tabs";
import AddIcon from "@mui/icons-material/Add";

const Sidebar = () => {
  return (
    <div className="w-48 md:w-64 h-screen overflow-y-scroll overflow-x-hidden bg-gray-100 border-r-2 rounded-md">
      <button className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md my-6 justify-center text-white w-10/12 mx-auto">
        <AddIcon className="h-4" />
        Add Page
      </button>

      <div className="flex items-center border-b-2 border-t-2 overflow-x-hidden overflow-y-scroll scroll-smooth">
        <ul className="w-full h-40 border-slate-200">
          <Page />
          <Page />
          <Page />
          <Page />
          <Page />
          <Page />
        </ul>
      </div>

      <TabsRender />
    </div>
  );
};

export default Sidebar;
