const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = {
  WEB_TITLE: "Testing",
  TOKEN_URL: "https://example/auth/token",
  SCO_AUTH_URL: "https://example/auth/token",
  PROVIDER_APP_ID: "12345678909876543221"
};

module.exports = {
  mode: "development",
  entry: {
    app: [path.resolve(__dirname, "src/Entry")]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // path: path.resolve("../emersoncode.tv/www", "assets") + "/",
    filename: "js/[name].js",
    publicPath: "/"
    // publicPath: "./assets/"
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
    disableHostCheck: true
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(env)
    }),
    new HtmlWebpackPlugin({
      WEB_TITLE: env.WEB_TITLE,
      template: "./src/index.ejs",
      filename: "./index.html"
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],

  resolve: {
    extensions: [".jsx", ".webpack.js", ".web.js", ".js", ".json"],
    alias: {
      "@dummydata": path.resolve(__dirname, "__dummydata__/"),
      "@mocks": path.resolve(__dirname, "__mocks__/"),

      "@Entry": path.resolve(__dirname, "src/Entry/"),
      "@Helpers": path.resolve(__dirname, "src/Helpers/"),

      // "@CommanderPages": path.resolve(__dirname, "src/Pages/Commander/"),
      // "@GlobalPages": path.resolve(__dirname, "src/Pages/Global/"),
      // "@UserPages": path.resolve(__dirname, "src/Pages/User/"),

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
      )
    }
  }
};
