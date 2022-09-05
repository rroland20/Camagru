function getRequestUrl(url) {
  return url[url.length - 1] === "/" ? url : `${url}/`;
}

export { getRequestUrl };