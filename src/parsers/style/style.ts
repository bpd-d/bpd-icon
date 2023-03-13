import {
  ACCENT_DEFAULT_SELECTOR,
  FILL_DEFAULT_SELECTOR,
} from "../../constants";
import { StyleOptions, IStyleAttributes } from "../../interfaces";
import {
  buildAccentNodeObject,
  buildFillNodeObject,
  buildStyleObject,
  parseStyleObject,
} from "../../utils";

export default function getStyle(
  styleAttributes: IStyleAttributes,
  options: StyleOptions
) {
  return [
    parseStyleObject(":host", {
      display: "inline-flex",
      padding: `${styleAttributes.padding ?? 2}px`,
    }),
    parseStyleObject("svg", buildStyleObject(styleAttributes, options)),
    parseStyleObject(
      styleAttributes.fillSelector ?? FILL_DEFAULT_SELECTOR,
      buildFillNodeObject(styleAttributes, options)
    ),
    parseStyleObject(
      styleAttributes.accentSelector ?? ACCENT_DEFAULT_SELECTOR,
      buildAccentNodeObject(styleAttributes, options)
    ),
  ]
    .filter(Boolean)
    .join(" ");
}
