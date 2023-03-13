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
];

export const INITIAL_ICON_STYLE: IStyleAttributes = {
  color: "black",
  ratio: null,
  name: null,
  stroke: null,
  padding: null,
};
