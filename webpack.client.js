const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/client/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        path: path.join(__dirname, "/build-client"),
        filename: "client.js"
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        }
        ]
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        open: true,
        port:3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/index.html"
        })
    ]
};