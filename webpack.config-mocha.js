const nodeExternals = require("webpack-node-externals");
const sourceMapType = "source-map";

module.exports = {
  target: "node", // webpack should compile node compatible code

  output: {
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    devtoolFallbackModuleFilenameTemplate: "[absolute-resource-path]?[hash]",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
        exclude: /node_modules/, // not really needed nodeExternals excludes it
      },
    ],
  },

  // in order to ignore all modules in node_modules folder
  // we need to let .css through tough so webpack can nullify them
  externals: [nodeExternals()],

  mode: "none",

  cache: true,

  devtool: sourceMapType,
};
