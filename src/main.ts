

import initCuiIcon from "./init";
import { IconMap, IconInitOptions } from "./interfaces";

interface MyWindow extends Window {
  initCuiIcon: (iconMap: IconMap, options?: IconInitOptions) => void;
}

declare let window: MyWindow;

window.initCuiIcon = initCuiIcon;
