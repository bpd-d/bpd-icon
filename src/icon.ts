import { SUPPORTED_ATTRIBUTES, SUPPORTED_NODES } from "./constants";
import { IconMap, IconCache } from "./interfaces";

export const forEachChildNode = <T extends Node>(
  node: T,
  callback: (node: ChildNode, index: number) => void
) => {
  if (node.hasChildNodes()) {
    let children = node.childNodes;
    let _len = children.length;

    for (let i = 0; i < _len; i++) {
      callback(children[i], i);
    }
  }
};

function createNodeElement(node: Element) {
  if (node.namespaceURI) {
    return document.createElementNS(node.namespaceURI, node.nodeName);
  }
  return document.createElement(node.nodeName);
}

export const createElement = (node: Element, root: Element) => {
  if (!SUPPORTED_NODES.includes(node.nodeName)) {
    return false;
  }

  const element = createNodeElement(node);

  SUPPORTED_ATTRIBUTES.forEach((attr) => {
    if (node.hasAttribute(attr)) {
      element.setAttribute(attr, node.getAttribute(attr) ?? "");
    }
  });

  forEachChildNode(node, (node) => {
    createElement(node as Element, element);
  });

  root.appendChild(element);
  return true;
};

export const prepareIcon = (
  name: string,
  map: IconMap,
  cache: IconCache,
  parser: (iconString: string) => Element | null
) => {
  if (cache[name]) {
    return cache[name];
  }

  if (!map[name]) {
    return null;
  }
  const _icon = parser(map[name]);

  if (!_icon) {
    return null;
  }

  cache[name] = _icon;
  return _icon;
};

export const setIcon = (icon: Element, ref: HTMLElement) => {
  if (!icon || !ref.shadowRoot) {
    return;
  }

  const _root = (<unknown>ref.shadowRoot) as Element;

  const existing = _root.querySelector("svg");

  if (existing) {
    existing.remove();
  }

  createElement(icon, _root);
};
