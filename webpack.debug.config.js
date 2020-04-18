const path = require("path");
const webpack = require("webpack");

const merge = require("webpack-merge");
const common = require("./webpack.base.config");

const env = {
  WEB_TITLE: "Base Project",
  TOKEN_URL: "https://example/auth/token",
  SCO_AUTH_URL: "https://example/auth/token",
  PROVIDER_APP_ID: "12345678909876543221",
};

const debug = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "/",
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],
  resolve: {
    extensions: [],
    alias: {},
  },
};

module.exports = merge(common(env), debug);
