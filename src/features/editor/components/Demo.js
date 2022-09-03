import React, { useEffect, useState } from "react";
import { editorConfig } from "../../../config/index";
import NavbarDemo from "./NavbarDemo";
import SidebarDemo from "./SidebarDemo";

const Demo = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = editorConfig();

    setEditor(editor);
  }, []);

  return (
    <div className="">
      <NavbarDemo />
      <div className="flex">
        <SidebarDemo />
        <div className="w-full">
          <div className="flex justify-center space-x-96">
            <div className="panel-devices"></div>
            <div className="panel-editor"></div>
            <div className="panel-basic-actions"></div>
          </div>

          <div id="editor" className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
