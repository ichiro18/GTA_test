const path = require("path");

exports.config = {
  module: {
    rules: [
      // icons
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: [
          path.resolve(__dirname, "../../..", "src/common/images/icons/SVG")
        ]
      },
      // images
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "file-loader",
        exclude: [
          path.resolve(__dirname, "../../..", "src/common/images/icons/SVG")
        ]
      }
    ]
  },
};
