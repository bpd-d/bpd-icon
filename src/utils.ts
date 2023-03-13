import { CAPITAL_LETTER_REGEX, DEFAULT_COLOR } from "./constants";
import { IStyleAttributes, StyleOptions } from "./interfaces";

export const multiplyBy = (value: number) => {
  return (input: string) => {
    return (Number(input) * value).toString();
  };
};

export const replaceCapitalLetter = (letter: string) => {
  return `-${letter.toLowerCase()}`;
};

export const parseStyleKey = (key: string) => {
  return key.replace(CAPITAL_LETTER_REGEX, replaceCapitalLetter);
};

export const objectToStyle = (styleObject: Record<string, string>) => {
  return Object.entries(styleObject).reduce((result, [key, value]) => {
    return `${result} ${parseStyleKey(key)}:${value};`;
  }, "");
};

export const parseStyleObject = (
  selector: string,
  styleObject: Record<string, string>
) => {
  return `${selector} {${objectToStyle(styleObject)}}`;
};

export const prepareValue = <T>(
  value: T | null | undefined,
  defaultValue: T,
  transform?: (t: T) => T
) => {
  const _value = value ?? defaultValue;
  return transform ? transform(_value) : _value;
};

export const styleHandler = (element: HTMLElement) => {
  return (styleString: string) => {
    element.textContent = styleString;
  };
};

export const buildStyleObject = (
  styleAttributes: IStyleAttributes,
  options: StyleOptions
) => {
  const style = {
    display: "inline-block",
    width: `${prepareValue(styleAttributes.ratio, "1", multiplyBy(20))}px`,
    height: `${prepareValue(styleAttributes.ratio, "1", multiplyBy(20))}px`,
    fill: "none",
    stroke: `${prepareValue(
      styleAttributes.color,
      `var(--${options.prefix}-icon-color, ${DEFAULT_COLOR})`
    )}`,
    strokeOpacity: "1",
    strokeWidth: `${prepareValue(styleAttributes.stroke, "1")}px`,
    strokeLinecap: "round",
    strokeLinejoin: "miter",
    transform: `rotate(${styleAttributes.rotation ?? 0}deg)`,
  };
  return style;
};

export const buildAccentNodeObject = (
  styleAttributes: IStyleAttributes,
  options: StyleOptions
) => {
  const baseColor = `${prepareValue(
    styleAttributes.color,
    `var(--${options.prefix}-icon-color, ${DEFAULT_COLOR})`
  )}`;
  return {
    stroke: prepareValue(
      styleAttributes.accent,
      `var(--${options.prefix}-icon-accent, ${baseColor})`
    ),
  };
};

export const buildFillNodeObject = (
  styleAttributes: IStyleAttributes,
  options: StyleOptions
) => {
  return {
    fill: prepareValue(
      styleAttributes.fill,
      `var(--${options.prefix}-icon-fill, none)`
    ),
  };
};
