const path = require("path");

module.exports = {
    entry: {index: "./src/index.js"},
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    devServer: {
        overlay: true,
        writeToDisk: true,
        historyApiFallback: true
    }
};