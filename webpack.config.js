const path = require('path');
const webpack = require('webpack');

module.exports = (env = {}) => {
    return {
        entry: {
            "kintoneUtility": './src/js/main.js',
            "kintoneUtility.min": './src/js/main.js'
        },
        output: {
            path: path.resolve(__dirname, 'docs'),
            filename: '[name].js',
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: 'es2015'
                    }
                },
            }]
        },
        watch: env.watch,
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                include: /\.min\.js$/,
                minimize: true
            })
        ]
    }
}
