// Commands
export const addEditorCommand = (editor) => {
  editor.Commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("Desktop"),
  });

  editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile"),
  });

  editor.Commands.add("set-device-tablet", {
    run: (editor) => editor.setDevice("Tablet"),
  });

  editor.Commands.add("cmd-clear", {
    run: (editor) => {
      editor.DomComponents.clear();
      editor.CssComposer.clear();
    },
  });

  editor.Commands.add("undo", {
    run: (editor) => editor.UndoManager.undo(),
  });

  editor.Commands.add("redo", {
    run: (editor) => editor.UndoManager.redo(),
  });

  editor.Commands.add("export", {
    run: (editor) => editor.runCommand("gjs-export-zip"),
  });

  editor.Commands.add("open-code", {
    run: (editor) => editor.CodeManager.buildEditor(editor),
  });
};
