import { StyleOptions, IStyleAttributes } from "../../interfaces";
import { buildStyleObject, parseStyleObject } from "../../utils";

export default function getStyle(
  styleAttributes: IStyleAttributes,
  options: StyleOptions
) {
  return parseStyleObject("svg", buildStyleObject(styleAttributes, options));
}
