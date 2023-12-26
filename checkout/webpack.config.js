const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const outputDir = "../checkout-ui-custom";
const src = "./src";

module.exports = () => {
  return [
    {
      entry: {
        "checkout6-custom": [
          path.resolve(__dirname, src, "styles.scss"),
          path.resolve(__dirname, src, "index.js"),
        ],
      },
      output: {
        filename: "checkout6-custom.js",
        path: path.resolve(__dirname, outputDir),
      },
      plugins: [
        new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: [
            "**/*",
            "!checkout6-custom.js",
            "!checkout6-custom.css",
          ],
        }),
      ],
      module: {
        rules: [
          {
            test: /\.(css|sass|scss)$/,
            use: [
              {
                loader: "file-loader",
                options: { name: "checkout6-custom.css" },
              },
              "sass-loader",
            ],
          },
          {
            test: /\.js$|jsx/,
            use: "babel-loader",
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: [".js", ".jsx"],
      },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
      },
    },
  ];
};
