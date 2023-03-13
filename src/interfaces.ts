type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface IStyleAttributes {
  name: string | null;
  ratio: string | null;
  stroke: string | null;
  color: string | null;
  padding: string | null;
  accent: string | null;
  accentSelector: string | null;
  fill: string | null;
  fillSelector: string | null;
  rotation: string | null;
}

export type IconParserOption = "xml" | "json" | IconParserCallback;

export type IconMap = Record<string, string>;
export type IconCache = Record<string, Element>;

export type IconInitOptions = {
  prefix: string;
  parser?: IconParserOption;
  stylesParser?: StyleParserCallback;
};

export type IconOptions = WithOptional<IconInitOptions, "prefix">;

export type StyleOptions = Required<Pick<IconOptions, "prefix">>;

export type IconParserCallback = (iconString: string) => Element | null;
export type StyleParserCallback = (
  attributes: IStyleAttributes,
  options: StyleOptions
) => string;
