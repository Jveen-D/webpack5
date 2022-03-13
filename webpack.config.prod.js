/*
 * @Date: 2022-03-10 20:08:03
 * @LastEditors: dwj18066042960
 * @FilePath: \webpack5\webpack.prod.js
 */
const path = require("path");
module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log("Mode: ", env.mode); // true

  return {
    mode: "production",
    entry: "./src/index.js",
    output: {
      filename: "main_prod.js",
      path: path.resolve(__dirname, "dist"),
    },
  };
};
