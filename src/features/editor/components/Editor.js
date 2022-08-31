import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components";
import SidebarDemo from "./SidebarDemo";
import { editorConfig } from "../../../config/index";

const Editor = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = editorConfig();

    setEditor(editor);
  }, []);

  return (
    <div className="">
      <Navbar />
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

export default Editor;
