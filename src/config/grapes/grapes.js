import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import {
  blockManager,
  layerManager,
  deviceManager,
  styleManager,
  panels,
  addEditorCommand,
} from "../../utilities/grapes/index";

const editorConfig = () => {
  const editor = grapesjs.init({
    container: "#editor",
    height: "100vh",

    plugins: [gjsBlockBasic],
    pluginsOpts: {
      gjsBlockBasic: {},
    },
    blockManager: blockManager,
    layerManager: layerManager,
    styleManager: styleManager,
    deviceManager: deviceManager,

    panels: panels,
  });

  addEditorCommand(editor);
};

export default editorConfig;
