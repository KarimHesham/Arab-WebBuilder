import { ChartBarIcon } from "@heroicons/react/solid";
import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex flex-wrap bg-slate-50" role="tablist">
            <li
              className={`flex-auto flex items-center justify-center p-2 ${
                openTab === 1
                  ? "border-2 bg-white border-b-0"
                  : "text-" + color + "-600"
              }`}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <ChartBarIcon className="h-5 text-blue-600" />
              </a>
            </li>
            <li
              className={`flex-auto flex items-center justify-center p-2 ${
                openTab === 2
                  ? "border-2 bg-white border-b-0"
                  : "text-" + color + "-600"
              }`}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <ChartBarIcon className="h-5 text-blue-600" />
              </a>
            </li>
            <li
              className={`flex-auto flex items-center justify-center p-2 ${
                openTab === 3
                  ? "border-2 bg-white border-b-0"
                  : "text-" + color + "-600"
              }`}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <ChartBarIcon className="h-5 text-blue-600" />
              </a>
            </li>

            <li
              className={`flex-auto flex items-center justify-center p-2 ${
                openTab === 4
                  ? "border-2 bg-white border-b-0"
                  : "text-" + color + "-600"
              }`}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <ChartBarIcon className="h-5 text-blue-600" />
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "visible" : "hidden"}
                  id="link1"
                >
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                  </p>
                </div>
                <div
                  className={openTab === 2 ? "visible" : "hidden"}
                  id="link2"
                >
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                  </p>
                </div>
                <div
                  className={openTab === 3 ? "visible" : "hidden"}
                  id="link3"
                >
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                  </p>
                </div>

                <div
                  className={openTab === 4 ? "visible" : "hidden"}
                  id="link4"
                >
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return <Tabs color="pink" />;
}
