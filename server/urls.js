import { includeUrl } from "./utils/index.js";

import apiUrls from "./api/urls.js";

const urls = [
  includeUrl("api/", apiUrls, "api"),
];

export default urls;