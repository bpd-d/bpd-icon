import { IStyleAttributes } from "./interfaces";

export const SUPPORTED_ATTRIBUTES = [
  "xmlns",
  "d",
  "class",
  "viewBox",
  "width",
  "height",
];
export const SUPPORTED_NODES = ["svg", "path"];
export const CAPITAL_LETTER_REGEX = /[A-Z]/g;

export const SUPPORTED_ELEMENT_ATTRIBUTES: (keyof IStyleAttributes)[] = [
  "color",
  "name",
  "ratio",
  "stroke",
  "padding",
  "accent",
  "accentSelector",
  "fill",
  "fillSelector",
  "rotation",
];

export const FILL_DEFAULT_SELECTOR = ".fill";
export const ACCENT_DEFAULT_SELECTOR = ".accent";
export const DEFAULT_COLOR = "black";

export const INITIAL_ICON_STYLE: IStyleAttributes = {
  color: DEFAULT_COLOR,
  ratio: null,
  name: null,
  stroke: null,
  padding: null,
  accent: DEFAULT_COLOR,
  accentSelector: ACCENT_DEFAULT_SELECTOR,
  fill: "none",
  fillSelector: FILL_DEFAULT_SELECTOR,
  rotation: null,
};
