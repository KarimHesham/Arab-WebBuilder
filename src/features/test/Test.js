import React, { useEffect, useRef } from "react";
import { basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";

const Test = () => {
  const editor = useRef();

  useEffect(() => {
    const state = EditorState.create({
      doc: "Start typing your code... ",
      extensions: [basicSetup, javascript()],
    });
    const view = new EditorView({ state, parent: document.querySelector(".arab-modal") });
    return () => {
      view.destroy();
    };
  }, []);

  return <div ref={editor}></div>;
};

export default Test;
