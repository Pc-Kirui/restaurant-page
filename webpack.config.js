import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import { watchFile } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  devServer: {
    watchFiles: ["./src/template.html"],
  },
};
