import { IconParserOption, StyleParserCallback } from "../interfaces";
import xmlParser from "./icon/xmlParser";
import getStyle from "./style/style";

export const getIconParser = (option?: IconParserOption) => {
  if (!option || option === "xml") {
    return xmlParser;
  }

  if (typeof option === "function") {
    return option;
  }

  return xmlParser;
};

export const getStyleParser = (option?: StyleParserCallback) => {
  return option ?? getStyle;
};
