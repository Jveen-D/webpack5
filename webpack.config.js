/*
 * @Date: 2022-03-10 20:03:26
 * @LastEditors: dwj18066042960
 * @FilePath: \webpack5\webpack.config.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const options = {};
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/webpack",
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Caching",
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
