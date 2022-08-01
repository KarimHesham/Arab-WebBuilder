import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";

const Editor = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
    });

    setEditor(editor);
  }, []);

  return <div id="editor"></div>;
};

export default Editor;
