import tinycolor from 'tinycolor2';

const COLOR_FACTOR = 10;

const darken = hexColor =>
  tinycolor(hexColor)
    .darken(COLOR_FACTOR)
    .toString();

const lighten = hexColor =>
  tinycolor(hexColor)
    .lighten(COLOR_FACTOR)
    .toString();

export { darken, lighten };
