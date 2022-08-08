import React from "react";
import { PlusIcon } from "@heroicons/react/solid";
import Page from "./Page";
import TabsRender from "./Tabs";

const Sidebar = () => {
  return (
    <div className="w-48 md:w-64 h-screen overflow-y-scroll overflow-x-hidden bg-white border-r-2 rounded-md">
      <button className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md my-6 justify-center text-white w-10/12 mx-auto">
        <PlusIcon className="h-4" />
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
