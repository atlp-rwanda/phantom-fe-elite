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
    port: process.env.PORT || 3000,
    allowedHosts: "all",
    // this allows react to the other path other than root path.
    historyApiFallback: true,
  },

  // Rules of how webpack will take our files, compile & bundle them for the browser
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
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
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        dependency: { not: ["url"] },
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
            publicPath: "images/",
          },
        },

        type: "javascript/auto",
      },
     
    ],
  },
};