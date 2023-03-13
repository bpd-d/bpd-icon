import { StyleOptions, IStyleAttributes } from "../../interfaces";
import { buildStyleObject, parseStyleObject } from "../../utils";

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
  ].join(" ");
}
