const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.base.config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const env = {
  WEB_TITLE: "Base Project",
  TOKEN_URL: "https://example/auth/token",
  SCO_AUTH_URL: "https://example/auth/token",
  PROVIDER_APP_ID: "12345678909876543221",
};

const pro = {
  mode: "production",
  output: {},
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + "/";
              },
            },
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional

      filename: "assets/css/[name].[hash].css",
      chunkFilename: "assets/css/[id].[chunkhash].css",
    }),
  ],
  resolve: {
    extensions: [],
    alias: {},
  },
};

module.exports = merge(common(env), pro);
