import CuiIcon from "./CuiIcon";
import { IconMap, IconInitOptions } from "./interfaces";

export default function initCuiIcon(
  iconMap: IconMap,
  options?: IconInitOptions
) {
  const prefix = options?.prefix ?? "cui";
  window.customElements.define(
    `${prefix}-icon`,
    CuiIcon(iconMap, {
      prefix,
      ...options,
    })
  );
}
