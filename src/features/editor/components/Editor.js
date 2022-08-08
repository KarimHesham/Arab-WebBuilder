import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import gjsBlocksBasic from "grapesjs-blocks-basic";
import { Navbar } from "../../../components";
import { ChartSquareBarIcon } from "@heroicons/react/outline";
import Sidebar from "./Sidebar";

const Editor = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [],
      pluginsOpts: {},
      blockManager: {
        appendTo: "#blocks",
      },
    });

    setEditor(editor);
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
};

export default Editor;
