import path from "path";
import webpack from "webpack";
import AssetsPlugin from "assets-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import overrideRules from "./lib/overrideRules";
import pkg from "../package.json";

const isDebug = !process.argv.includes("--release");
const isVerbose = process.argv.includes("--verbose");
const isAnalyze =
  process.argv.includes("--analyze") || process.argv.includes("--analyse");

const reScript = /\.(js|jsx|mjs)$/;
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
const reImage = /\.(bmp|gif|jpg|jpeg|png|svg)$/;
const staticAssetName = isDebug
  ? "[path][name].[ext]?[hash:8]"
  : "[hash:8].[ext]";

const minimizeCssOptions = {
  discardComments: { removeAll: true }
};

module.exports = {
  /* ... */
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      }
    ]
  }
  /* ... */
};
