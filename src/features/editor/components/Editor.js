import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import { Navbar } from "../../../components";
import Sidebar from "./Sidebar";
import gjsBlockBasic from "grapesjs-blocks-basic";
import { DesktopComputerIcon } from "@heroicons/react/solid";

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
        defaults: [
          {
            id: "basic-actions",
            el: ".panel-basic-actions",
            buttons: [
              {
                id: "visibility",
                active: true, // active by default
                className: "btn-toggle-borders",
                label: "<u>B</u>",
                command: "sw-visibility", // Built-in command
              },
            ],
          },

          // {
          //   id: "panel-devices",
          //   el: ".panel-devices",
          //   buttons: [
          //     {
          //       id: "device-desktop",
          //       label: "D",
          //       command: "set-device-desktop",
          //       active: true,
          //       togglable: false,
          //     },
          //     {
          //       id: "device-mobile",
          //       label: "<i>M</i>",
          //       command: "set-device-mobile",
          //       active: true,
          //       togglable: false,
          //     },
          //     {
          //       id: "device-tablet",
          //       label: "T",
          //       command: "set-device-tablet",
          //       active: true,
          //       togglable: false,
          //     },
          //   ],
          // },
        ],
      },
      deviceManager: {
        devices: [
          {
            name: "Desktop",
            width: "",
          },
          {
            name: "Mobile",
            width: "320px",
            widthMedia: "480px",
          },
          {
            name: "Tablet",
            width: "800px", // This width will be applied on the canvas frame
            widthMedia: "810px", // This width that will be used for the CSS media
            height: "600px", // Height will be applied on the canvas frame
          },
        ],
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
          <div className="w-full border-2 h-10 bg-slate-500 border-slate-300 flex items-center space-x-6">
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
