const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? false : "source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack", "url-loader"],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: "file-loader",
        },
      ],
    },
    resolve: {
      extensions: [".*", ".js", ".jsx"],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/", // Ensure this is set for proper routing with client-side navigation
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 9000,
      hot: true,
    },
  };
};
