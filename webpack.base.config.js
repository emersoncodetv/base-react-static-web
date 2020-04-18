const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => ({
  entry: {
    app: [path.resolve(__dirname, "src/Entry")],
  },
  output: {
    path: path.resolve("./www") + "/",
    chunkFilename: "assets/js/[id].[chunkhash].js",
    filename: "assets/js/[name].[hash].js",
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|gif|woff|eot|ttf|svg|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000,
          },
        },
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            fallback: "file-loader",
            name: "images/[name].[hash].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(env),
    }),
    new HtmlWebpackPlugin({
      WEB_TITLE: env.WEB_TITLE,
      template: "./src/index.ejs",
      filename: "./index.html",
    }),
  ],

  resolve: {
    extensions: [".jsx", ".webpack.js", ".web.js", ".js", ".json"],
    alias: {
      "@dummydata": path.resolve(__dirname, "__dummydata__/"),
      "@mocks": path.resolve(__dirname, "__mocks__/"),

      "@Entry": path.resolve(__dirname, "src/Entry/"),
      "@Helpers": path.resolve(__dirname, "src/Helpers/"),

      "@Cross": path.resolve(__dirname, "src/Cross/"),
      // "@GlobalPages": path.resolve(__dirname, "src/Pages/Global/"),

      "styled-components": path.resolve(
        __dirname,
        "node_modules/styled-components"
      ),
      react: path.resolve(__dirname, "node_modules/react"),
      "@storybook/react": path.resolve(
        __dirname,
        "node_modules/@storybook/react"
      ),
      "@storybook/addon-actions": path.resolve(
        __dirname,
        "node_modules/@storybook/addon-actions"
      ),
    },
  },
});
