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
      blockManager: {
        appendTo: "#blocks",
      },
      layerManager: {
        appendTo: "#layers",
      },
      styleManager: {
        appendTo: "#styles",
      },
      plugins: [gjsBlockBasic],
      pluginsOpts: {
        gjsBlockBasic: {},
      },
      // storageManager: false,
    });

    setEditor(editor);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex h-8">
        <Sidebar />
        <div className="w-screen">
          <div className="w-full border-2 border-slate-500">Devices Basics</div>
          <div id="editor" className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
