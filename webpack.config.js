const path = require('path');

module.exports = function (env) {
    const res = {
        entry: {
            app: './src/index.js',
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'public'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        debug: true,
                                        useBuiltIns: 'usage',
                                        corejs: 3,
                                        targets: {
                                            browsers: ['defaults'],
                                        },
                                    },
                                ],
                                ['@babel/preset-react'],
                            ],
                            plugins: [],
                        },
                    },
                },
            ],
        },
    };
    if (env.development) {
        res['mode'] = 'development';
        res['devtool'] = 'inline-source-map';
    }
    if (env.production) res['mode'] = 'production';

    return res;
};
