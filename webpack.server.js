const path = require("path");
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [webpackNodeExternals()],
    entry: "./src/server/main.ts",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        path: path.join(__dirname, "/build-server"),
        filename: "server.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    devtool: "source-map",
    stats: 'errors-only'
};