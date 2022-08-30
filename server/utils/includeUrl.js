/**
 *
 * @param {string} url
 * @param {Array<Object>} urlsArray
 * @param {string} [name=""]
 */
function includeUrl(url, urlsArray, name="") {
  const views = urlsArray.map(({ url: viewUrl, name: viewName, view }) => {
    return ({
      view,
      url: url + viewUrl,
      name: name ? `${name}.${viewName}` : viewName,
      viewName,
    });
  });

  return {
    url,
    views,
    name,
  };
}

export { includeUrl };
