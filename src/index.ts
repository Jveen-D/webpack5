/*
 * @Date: 2022-03-13 19:38:48
 * @LastEditors: dwj18066042960
 * @FilePath: \webpack5\src\index.ts
 */
import * as _ from "lodash";
function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

document.body.appendChild(component());
