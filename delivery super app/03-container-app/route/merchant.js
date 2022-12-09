import manifest from "common-package";
const merchantInfo = manifest.childs.find((c) => c.id === "MERCHANT");
export default {
  path: "/merchant",
  frameUrl: manifest.baseURL + manifestInfo.url,
  title: "merchant title",
  description: "merchant page root url",
};
