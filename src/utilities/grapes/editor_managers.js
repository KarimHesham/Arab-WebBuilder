export const blockManager = {
  appendTo: "#blocks",
};

export const layerManager = {
  appendTo: "#layers",
};

export const styleManager = {
  appendTo: "#styles",
};

export const deviceManager = {
  devices: [
    {
      name: "Desktop",
      width: "",
    },
    {
      name: "Mobile",
      width: "320px",
      widthMedia: "480px",
    },
    {
      name: "Tablet",
      width: "800px", // This width will be applied on the canvas frame
      widthMedia: "810px", // This width that will be used for the CSS media
      height: "600px", // Height will be applied on the canvas frame
    },
  ],
};
