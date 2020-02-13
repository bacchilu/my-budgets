const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ["@babel/preset-env"]
            }
        }]
    }
};
