/*
 * @Date: 2022-03-04 16:23:17
 * @LastEditors: dwj18066042960
 * @FilePath: \webpack5\src\index.js
 */
async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import("lodash");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
