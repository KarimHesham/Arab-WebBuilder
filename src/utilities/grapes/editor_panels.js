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
          label: `B`,
          command: "sw-visibility", // Built-in command
        },
      ],
    },
  ],
};
