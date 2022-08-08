import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import { Navbar } from "../../../components";
import Sidebar from "./Sidebar";
import gjsBlockBasic from "grapesjs-blocks-basic";

const Editor = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      height: "100vh",
      plugins: [gjsBlockBasic],
      pluginsOpts: {
        gjsBlockBasic: {},
      },
      blockManager: {
        appendTo: "#blocks",
      },
      layerManager: {
        appendTo: "#layers",
      },
      styleManager: {
        appendTo: "#styles",
      },
      panels: {
        defaults: {},
      },
      // storageManager: false,
    });

    setEditor(editor);
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <div className="w-full border-2 border-slate-300">Devices Basics</div>
          <div id="editor" className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
