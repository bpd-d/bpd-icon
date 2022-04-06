export default function xmlParser(iconStr: string) {
  const parser = new DOMParser();
  const document = parser.parseFromString(iconStr, "text/xml");

  return document.children.item(0);
};