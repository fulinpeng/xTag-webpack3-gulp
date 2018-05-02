/*
 * @Author: fulp 
 * @Date: 2018-05-01 15:44:44 
 * @Last Modified by: fulp
 * @Last Modified time: 2018-05-02 08:53:41
 */

const webpack = require("webpack");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ISDEV = process.env.NODE_ENV == "prod" ? false : true;
const path = src => require("path").join(__dirname, src);

const config = {
  entry: {
    index: [path("./src/public/script/index.js")],
    tag: [path("./src/public/script/tag.js")]
  },
  output: {
    filename: "public/script/[name]-[hash:5].js",
    path: path("./build/")
    // publicPath: path("http://localhost:3000/public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: "prod"
    //   }
    // }),
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons", // chunk的名字
      filename: "public/script/commons.js" // 文件名
      // minChunks: 3,
    }),
    new HtmlWebpackPlugin({
      filename: "./views/layout.html",
      template: "src/widget/layout.html",
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "./views/index.html",
      template: "src/views/index.js",
      chunks: ["commons", "index", "tag"],
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: "./widget/index.html",
      template: "src/widget/index.html",
      inject: false
    })
  ]
};

if (!ISDEV) {
  //   config.rules = concat(config.rules, []);
  config.plugins = config.plugins.concat(
    // new UglifyjsWebpackPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  );
  console.log(config.plugins.length);
}
module.exports = config;
