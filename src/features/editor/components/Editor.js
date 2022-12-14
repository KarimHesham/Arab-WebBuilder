import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components";
import Sidebar from "./Sidebar";
import { editorConfig } from "../../../config/index";
import useCodeMirror from "../../../hooks/codemirror";
import { basicSetup } from "@codemirror/basic-setup";

import { javascript } from "@codemirror/lang-javascript";

const Editor = () => {
  const [editor, setEditor] = useState(null);

  const { ref } = useCodeMirror([basicSetup, javascript()]);

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
