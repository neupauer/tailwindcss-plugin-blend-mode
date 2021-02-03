const plugin = require("tailwindcss/plugin");

const blendModes = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
];

const blendModePlugin = plugin(function ({ addUtilities, theme, variants, e }) {
  addUtilities(
    [
      {
        ".isolate": {
          isolation: "isolate",
        },
        ".no-isolate": {
          isolation: "auto",
        },
      },
      ...blendModes.map((blendMode) => {
        return {
          [`.${e(`mix-blend-${blendMode}`)}`]: {
            mixBlendMode: `${blendMode}`,
          },
        };
      }),
      ...blendModes.map((blendMode) => {
        return {
          [`.${e(`bg-blend-${blendMode}`)}`]: {
            backgroundBlendMode: `${blendMode}`,
          },
        };
      }),
    ],
    variants("blendMode")
  );
});

module.exports = blendModePlugin;
