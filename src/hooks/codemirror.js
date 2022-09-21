import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";
import { useCallback, useEffect, useState } from "react";


export default function useCodeMirror(extensions) {
  const [element, setElement] = useState("");

  const ref = useCallback((node) => {
    if (!node) return;

    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;

    const view = new EditorView({
      state: EditorState.create({
        extensions: [basicSetup, javascript(), ...extensions],
      }),
      parent: element,
    });

    return () => view?.destroy();
  }, [element]);

  return { ref };
}
