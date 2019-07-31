const VueLoaderPlugin = require('vue-loader/lib/plugin');

exports.config = {
  module: {
    rules: [
      // Vue
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // ES6
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
};
