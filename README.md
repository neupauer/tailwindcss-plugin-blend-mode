# Tailwind CSS Plugin – Blend Mode

Utilities for controlling blending mode behaviour.

## Install

1. Install the plugin:

```bash
# Using npm
npm install @neupauer/tailwindcss-plugin-blend-mode

# Using Yarn
yarn add @neupauer/tailwindcss-plugin-blend-mode
```

2. Add it to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [require("@neupauer/tailwindcss-plugin-blend-mode")],
};
```

## Configuration

```js
// tailwind.config.js
module.exports = {
  variants: {
    // default
    blendMode: [],
  },
};
```

## Available Utilities

| Utility                  | Style                                |
| ------------------------ | ------------------------------------ |
| `.isolate`               | `isolation: isolate`                 |
| `.no-isolate`            | `isolation: auto`                    |
| `.mix-blend-normal`      | `mix-blend-mode: normal`             |
| `.mix-blend-multiply`    | `mix-blend-mode: multiply`           |
| `.mix-blend-screen`      | `mix-blend-mode: screen`             |
| `.mix-blend-overlay`     | `mix-blend-mode: overlay`            |
| `.mix-blend-darken`      | `mix-blend-mode: darken`             |
| `.mix-blend-lighten`     | `mix-blend-mode: lighten`            |
| `.mix-blend-color-dodge` | `mix-blend-mode: color-dodge`        |
| `.mix-blend-color-burn`  | `mix-blend-mode: color-burn`         |
| `.mix-blend-hard-light`  | `mix-blend-mode: hard-light`         |
| `.mix-blend-soft-light`  | `mix-blend-mode: soft-light`         |
| `.mix-blend-difference`  | `mix-blend-mode: difference`         |
| `.mix-blend-exclusion`   | `mix-blend-mode: exclusion`          |
| `.mix-blend-hue`         | `mix-blend-mode: hue`                |
| `.mix-blend-saturation`  | `mix-blend-mode: saturation`         |
| `.mix-blend-color`       | `mix-blend-mode: color`              |
| `.mix-blend-luminosity`  | `mix-blend-mode: luminosity`         |
| `.bg-blend-normal`       | `background-blend-mode: normal`      |
| `.bg-blend-multiply`     | `background-blend-mode: multiply`    |
| `.bg-blend-screen`       | `background-blend-mode: screen`      |
| `.bg-blend-overlay`      | `background-blend-mode: overlay`     |
| `.bg-blend-darken`       | `background-blend-mode: darken`      |
| `.bg-blend-lighten`      | `background-blend-mode: lighten`     |
| `.bg-blend-color-dodge`  | `background-blend-mode: color-dodge` |
| `.bg-blend-color-burn`   | `background-blend-mode: color-burn`  |
| `.bg-blend-hard-light`   | `background-blend-mode: hard-light`  |
| `.bg-blend-soft-light`   | `background-blend-mode: soft-light`  |
| `.bg-blend-difference`   | `background-blend-mode: difference`  |
| `.bg-blend-exclusion`    | `background-blend-mode: exclusion`   |
| `.bg-blend-hue`          | `background-blend-mode: hue`         |
| `.bg-blend-saturation`   | `background-blend-mode: saturation`  |
| `.bg-blend-color`        | `background-blend-mode: color`       |
| `.bg-blend-luminosity`   | `background-blend-mode: luminosity`  |

## Usage

```html
<div class="bg-blend-hue"></div>
<div class="mix-blend-color"></div>
<div class="isolate mix-blend-darken"></div>
```
