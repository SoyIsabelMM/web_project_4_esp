const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "inline-source-map",

  entry: {
    main: "./src/index.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),

    filename: "main.js",

    publicPath: "/",
  },

  target: ["web", "es5"],

  stats: { children: true },

  mode: "development",

  devServer: {
    static: path.resolve(__dirname, "./dist"),

    compress: true,

    port: 8080,

    open: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },

      {
        test: /\.css$/,

        use: [
          MiniCssExtractPlugin.loader,

          {
            loader: "css-loader",

            options: {
              importLoaders: 1,
            },
          },

          "postcss-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // ruta a nuestro archivo index.html
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin(), // conecta el plugin para fusionar archivos CSS
  ],
};
