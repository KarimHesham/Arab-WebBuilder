import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components";
import Sidebar from "./Sidebar";
import editorConfig from "../../../config/grapes/grapes";

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
        <Sidebar />
        <div className="w-full">
          <div className="w-full h-10 bg-slate-500 flex items-center space-x-6">
            <div className="panel-devices flex items-center space-x-3"></div>
            <div className="panel-basic-actions"></div>
          </div>
          <div id="editor" className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
