const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        // exclude: '/node_modules',
        type: "asset/resource",
        use: [
          "file-loader?name=[name].[ext]&publicPath=./&outputPath=./images/",
          "image-webpack-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        // exclude: '/node_modules',
        use: ["url-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
    clean: true,
  },
  devServer: {
    // contentBase: "./build",
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    // publicPath: "/public",
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      template: "./public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/img"),
          to: path.resolve(__dirname, "build/img/"),
        },
      ],
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000,
  },
};

// const path = require("path");
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: "babel-loader",
//         options: { presets: ["@babel/env"] },
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader", "postcss-loader"],
//       },
//     ],
//   },
//   resolve: { extensions: [".*", ".js", ".jsx"] },
//   output: {
//     path: path.resolve(__dirname, "build"),
//     publicPath: "/",
//     filename: "bundle.js",
//   },
//   devServer: {
//     contentBase: "./build",
//     static: {
//       directory: path.join(__dirname, "public"),
//     },
//     compress: true,
//     port: 3000,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       minify: {
//         removeComments: true,
//         collapseWhitespace: true,
//         removeAttributeQuotes: true,
//       },
//       template: "public/index.html",
//       chunksSortMode: "dependency",
//     }),
//   ],
//   performance: {
//     hints: false,
//     maxEntrypointSize: 1000000,
//     maxAssetSize: 1000000,
//   },
// };
