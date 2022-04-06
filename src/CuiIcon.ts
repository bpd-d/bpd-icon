import { prepareIcon, setIcon } from "./icon";
import {
  IStyleAttributes,
  IconMap,
  IconOptions,
  StyleOptions,
} from "./interfaces";
import { styleHandler } from "./utils";
import { SUPPORTED_ELEMENT_ATTRIBUTES, INITIAL_ICON_STYLE } from "./constants";
import { getIconParser, getStyleParser } from "./parsers/parsers";

export default function CuiIcon(icons: IconMap, options: IconOptions) {
  const _iconsChache = {};
  const _iconParser = getIconParser(options.parser);
  const _parseStyle = getStyleParser(options.stylesParser);
  const _styleOptions: StyleOptions = {
    prefix: options.prefix ?? "cui",
  };
  return class CuiIcon extends HTMLElement {
    _styleHandler: (t: string) => void;
    _styleAttributes: IStyleAttributes = INITIAL_ICON_STYLE;
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      shadowRoot.appendChild(style);
      this._styleHandler = styleHandler(style);
    }

    connectedCallback() {
      SUPPORTED_ELEMENT_ATTRIBUTES.forEach((attribute) => {
        this._styleAttributes[attribute] = this.getAttribute(attribute);
      });
      this._styleHandler(_parseStyle(this._styleAttributes, _styleOptions));
    }

    disconnectedCallback() {}

    attributeChangedCallback(
      name: keyof IStyleAttributes,
      _: string,
      newValue: string
    ) {
      if (!SUPPORTED_ELEMENT_ATTRIBUTES.includes(name)) {
        return;
      }
      if (name === "name") {
        const _icon = prepareIcon(newValue, icons, _iconsChache, _iconParser);
        if (!_icon) {
          return;
        }
        setIcon(_icon, this);
        return;
      }

      this._styleAttributes[name] = newValue;
      this._styleHandler(_parseStyle(this._styleAttributes, _styleOptions));
    }

    static get observedAttributes() {
      return SUPPORTED_ELEMENT_ATTRIBUTES;
    }
  };
}
