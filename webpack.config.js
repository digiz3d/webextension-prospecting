// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")

const isProduction = process.env.NODE_ENV == "production"

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: `manifest.json`,
          to: `../dist/manifest.json`,
          context: "public",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: { target: "es2015" },
      },
    ],
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = "production"
  } else {
    config.mode = "development"
  }
  return config
}
