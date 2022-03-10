/*
 * @Date: 2022-03-10 20:03:26
 * @LastEditors: dwj18066042960
 * @FilePath: /webpack5/webpack.config.js
 */
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // 加载纯css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // 加载images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // 加载fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
