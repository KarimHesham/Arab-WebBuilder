import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
import PaletteIcon from "@mui/icons-material/Palette";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul className="flex flex-wrap bg-slate-50" role="tablist">
          <li
            className={`flex-auto flex items-center justify-center p-2 ${
              openTab === 1 ? "border-2 bg-white border-b-0" : ""
            }`}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#blocks"
              role="tablist"
            >
              <GridViewIcon className="h-4 text-blue-600" />
            </a>
          </li>
          <li
            className={`flex-auto flex items-center justify-center p-2 ${
              openTab === 2 ? "border-2 bg-white border-b-0" : ""
            }`}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#layers"
              role="tablist"
            >
              <LayersIcon className="h-5 text-blue-600" />
            </a>
          </li>
          <li
            className={`flex-auto flex items-center justify-center p-2 ${
              openTab === 3 ? "border-2 bg-white border-b-0" : ""
            }`}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#styles"
              role="tablist"
            >
              <PaletteIcon className="h-5 text-blue-600" />
            </a>
          </li>
        </ul>

        <div className="flex flex-col bg-white w-full shadow-lg">
          <div className="flex-auto">
            <div className="tab-content tab-space">
              <div
                className={`${openTab === 1 ? "visible" : "hidden"}`}
                id="blocks"
              ></div>
              <div
                className={openTab === 2 ? "visible" : "hidden"}
                id="layers"
              ></div>
              <div
                className={openTab === 3 ? "visible" : "hidden"}
                id="styles"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
