const paths = require("./paths");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: paths.root + "/.env.development",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  devtool: "eval-source-map",
};
