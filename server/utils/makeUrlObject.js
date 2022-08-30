/**
 *
 * @param {string} url
 * @param {function} view
 * @param {string} [name=""]
 * @returns {{view, name: string, url}}
 */
function makeUrlObject(url, view, name = "") {
  return {
    url,
    view,
    name,
  };
}

export { makeUrlObject };