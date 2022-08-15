export const panels = {
  defaults: [
    {
      id: "basic-actions",
      el: ".panel-basic-actions",
      buttons: [
        {
          id: "visibility",
          active: true, // active by default
          className: "h-4",
          label: `<i class="fa fa-clone"></i>`,
          command: "sw-visibility", // Built-in command
        },
      ],
    },
    {
      id: "panel-devices",
      el: ".panel-devices",
      buttons: [
        {
          id: "device-desktop",
          label: "<i class='fa fa-television'></i>",
          command: "set-device-desktop",
          active: true,
          togglable: false,
          attributes: { title: "Desktop" },
        },
        {
          id: "device-tablet",
          label: "<i class='fa fa-tablet'></i>",
          command: "set-device-tablet",
          active: true,
          togglable: false,
          attributes: { title: "Tablet" },
        },
        {
          id: "device-mobile",
          label: "<i class='fa fa-mobile'></i>",
          command: "set-device-mobile",
          active: true,
          togglable: false,
          attributes: { title: "Mobile" },
        },
        {
          id: "saveDb",
          className: "fa fa-save",
          command: "saveDb",
          attributes: { title: "Save" },
        },
        {
          id: "cmd-clear",
          className: "fa fa-trash",
          command: "cmd-clear",
          attributes: { title: "Clear" },
        },
        {
          id: "undo",
          className: "fa fa-undo",
          command: "undo",
          attributes: { title: "Undo" },
        },
        {
          id: "redo",
          className: "fa fa-repeat",
          command: "redo",
          attributes: { title: "Redo" },
        },
        {
          id: "arab-code",
          className: "fa fa-download",
          command: "arab-code",
          attributes: { title: "Arab Code" },
        },
        {
          id: "open-code",
          className: "fa fa-code",
          command: "export-template",
          attributes: { title: "Template Code" },
        },
        {
          id: "preview",
          className: "fa fa-eye",
          command: "preview",
          attributes: { title: "Preview Mode" },
        },
      ],
    },
  ],
};
