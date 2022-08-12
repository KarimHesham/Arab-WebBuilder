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
        },
        {
          id: "device-tablet",
          label: "<i class='fa fa-tablet'></i>",
          command: "set-device-tablet",
          active: true,
          togglable: false,
        },
        {
          id: "device-mobile",
          label: "<i class='fa fa-mobile'></i>",
          command: "set-device-mobile",
          active: true,
          togglable: false,
        },
        {
          id: "saveDb",
          className: "fa fa-paper-plane btn-save",
          command: "saveDb",
        },
        {
          id: "cmd-clear",
          className: "fa fa-trash",
          command: "cmd-clear",
        },
        {
          id: "undo",
          className: "fa fa-undo",
          command: "undo",
        },
        {
          id: "redo",
          className: "fa fa-repeat",
          command: "redo",
        },
        {
          id: "export",
          className: "fa fa-download",
          command: "export",
        },
        {
          id: "open-code",
          className: "fa fa-code",
          command: "open-code",
        },
        {
          id: "preview",
          className: "fa fa-eye",
          command: "preview",
        },
      ],
    },
  ],
};
