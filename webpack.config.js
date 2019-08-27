const path = require('path');
const webpack = require('webpack');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env = {}) => {
    return {
        entry: {
            'kintoneUtility': './src/js/main.js',
            'kintoneUtility.min': './src/js/main.js'
        },
        output: {
            path: path.resolve(__dirname, 'docs'),
            filename: '[name].js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                'env', {
                                targets: {node: "current"}
                            }]
                        ],
                    }
                }
            }]
        },
        watch: env.watch,
        plugins: [
            new uglifyjsWebpackPlugin({
                include: /\.min\.js$/,
            })
        ]
    };
};
