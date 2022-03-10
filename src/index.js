/*
 * @Date: 2022-03-04 16:23:17
 * @LastEditors: dwj18066042960
 * @FilePath: /webpack5/src/index.js
 */
import _ from "lodash";

function component() {
  const element = document.createElement("div");

  const child = document.createElement("div");
  // lodash 在当前 script 中使用 import 引入
  child.innerHTML = _.join(["Hello", "webpack"], " ");
  child.classList.add("hello");

  element.appendChild(child);
  return element;
}

document.body.appendChild(component());
