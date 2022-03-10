/*
 * @Date: 2022-03-10 20:03:26
 * @LastEditors: dwj18066042960
 * @FilePath: /webpack5/webpack.config.js
 */
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
