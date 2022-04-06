const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  // Where files should be sent once they are bundled
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: process.env.PORT || 5000,
    allowedHosts: "all",
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
};
