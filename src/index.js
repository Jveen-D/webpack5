/*
 * @Date: 2022-03-04 16:23:17
 * @LastEditors: dwj18066042960
 * @FilePath: /webpack5/src/index.js
 */
import _ from "lodash";
import Happy from "./happy.jpeg";
import "./style.css";
function component() {
  const element = document.createElement("div");

  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Happy;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
