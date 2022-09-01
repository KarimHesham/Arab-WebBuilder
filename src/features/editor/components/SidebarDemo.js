import React from "react";
import TabsRender from "./Tabs";

const SidebarDemo = () => {
  return (
    <div className="w-48 md:w-64 h-screen overflow-y-scroll overflow-x-hidden bg-gray-100 border-r-2 rounded-md">
      <TabsRender />
    </div>
  );
};

export default SidebarDemo;
