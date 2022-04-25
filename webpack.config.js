const path = require("path");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // to clean the assets in the dist when reloading in the production mode
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // extract css to files

module.exports = {

  //Where the webpack will look when starting to bundle the files. like starting point in the folder
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

    // this allows react to route to the other paths other than root path.
    historyApiFallback: true,
  },

  // Rules of how webpack will take our files, compile & bundle them for the browser
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
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
<<<<<<< HEAD
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
=======
>>>>>>> 828a684842516364ea1b8895460ad0b3a9be3d11
    ],
  },
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding from the dist folder.
    new CleanWebpackPlugin(),

    new Dotenv(),
    new HtmlWebpackPlugin({ template: "./src/template.html" }),

    // This is responsible for extracting the css styles from the bundled files and create
<<<<<<< HEAD
    
=======
>>>>>>> 828a684842516364ea1b8895460ad0b3a9be3d11
    // a separate folder named styles under the dist folder created so that it can be sent to the browser
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
  ],
};
<<<<<<< HEAD
=======

 
>>>>>>> 828a684842516364ea1b8895460ad0b3a9be3d11
