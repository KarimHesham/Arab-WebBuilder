import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import gjsBlocksBasic from "grapesjs-blocks-basic";
import { Navbar } from "../../../components";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/solid";

const Editor = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsBlocksBasic],
      pluginsOpts: {
        gjsBlocksBasic: {},
      },
      blockManager: {
        appendTo: "#blocks",
      },
    });

    setEditor(editor);
  }, []);

  return (
    <>
      <Navbar />
      <div className="fixed left-0 w-48 md:w-64 h-screen overflow-scroll overflow-x-hidden bg-white border  shadow-2xl rounded-md -z-10">
        {/* <div className="flex items-center justify-center">
          <img
            src="http://arabcode.ae/images/arab-logo.png"
            alt=""
            className="w-1/3"
          ></img>
        </div> */}

        <button className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md my-6 justify-center text-white w-10/12 mx-auto">
          <PlusIcon className="h-4" />
          Add Page
        </button>

        <div className="flex items-center">
          <ul className="w-full overflow-x-auto overflow-y-scroll scroll-smooth h-40 border-b-2 border-slate-200">
            <li className="flex items-center justify-between shadow-sm px-4 py-2 hover:scale-105 hover:bg-slate-100">
              Page1
              <div className="flex items-center">
                <PencilIcon className="h-5 text-blue-600 hover:scale-125" />
                <TrashIcon className="h-5 text-red-500 hover:scale-125" />
              </div>
            </li>
            <li className="flex items-center justify-between px-4 py-2 shadow-sm rounded-md hover:scale-105 hover:bg-slate-100">
              Page1
              <div className="flex items-center">
                <PencilIcon className="h-5 text-blue-600 hover:scale-125" />
                <TrashIcon className="h-5 text-red-500 hover:scale-125" />
              </div>
            </li>
            <li className="flex items-center justify-between px-4 py-2 shadow-sm rounded-md hover:scale-105 hover:bg-slate-100">
              Page1
              <div className="flex items-center">
                <PencilIcon className="h-5 text-blue-600 hover:scale-125" />
                <TrashIcon className="h-5 text-red-500 hover:scale-125" />
              </div>
            </li>
            <li className="flex items-center justify-between px-4 py-2 shadow-sm rounded-md hover:scale-105 hover:bg-slate-100">
              Page1
              <div className="flex items-center">
                <PencilIcon className="h-5 text-blue-600 hover:scale-125" />
                <TrashIcon className="h-5 text-red-500 hover:scale-125" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Editor;
