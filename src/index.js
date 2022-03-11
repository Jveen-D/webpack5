/*
 * @Date: 2022-03-04 16:23:17
 * @LastEditors: dwj18066042960
 * @FilePath: /webpack5/src/index.js
 */
import _ from "lodash";
import "./index.css";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");

  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("red");

  const btn = document.createElement("button");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
