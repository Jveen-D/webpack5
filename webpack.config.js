/*
 * @Date: 2022-03-10 20:03:26
 * @LastEditors: dwj18066042960
 * @FilePath: \webpack5\webpack.dev.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const options = {};
module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log("Mode: ", env.mode); // true

  return {
    mode: "development",
    entry: {
      index: "./src/index.ts",
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      publicPath: "/",
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
    optimization: {
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };
};
