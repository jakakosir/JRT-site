const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fse = require("fs-extra");
const { map } = require("lodash");

class RunAfterCompile {
  //copying images//
  apply(compiler) {
    compiler.hooks.done.tap("Copy images", function () {
      fse.copySync("./app/assets/img", "./docs/assets/img");
    });
  }
}

let cssConfig = {
  test: /\.scss$/i,
  use: ["css-loader", "sass-loader"],
};

let pages = fse
  .readdirSync("./app")
  .filter(function (file) {
    return file.endsWith(".html");
  })
  .map(function (page) {
    return new HtmlWebpackPlugin({
      filename: page,
      template: `./app/${page}`,
    });
  });

let config = {
  entry: "./app/assets/scripts/App.js",
  plugins: pages,
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "use",
                attribute: "xlink:href", //for SVGs//
                type: "src",
              },
            ],
          },
        },
      },
      cssConfig,
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        loader: "file-loader",
      },
    ],
  },
};

if (currentTask == "dev") {
  cssConfig.use.unshift("style-loader");
  config.output = {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
    publicPath: "",
  };

  config.devServer = {
    before: function (app, server) {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    host: "0.0.0.0",
  };
  config.mode = "development";
}

if (currentTask == "build") {
  config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  });

  cssConfig.use.unshift(MiniCssExtractPlugin.loader);
  config.output = {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "docs"),
    publicPath: "",
  };
  config.mode = "production";
  config.optimization = {
    splitChunks: { chunks: "all", minSize:1000, name:"vendor"},
  };
  config.plugins.push(
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "styles.[chunkhash].css" }),
    new RunAfterCompile()
  );
}

module.exports = config;
