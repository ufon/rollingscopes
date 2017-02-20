const path = require('path');
const webpack = require('webpack');

module.exports = function (env) {
    return {
        context: path.resolve(__dirname, '../src'),

        entry: {
            app: './index.js',
        },

        output: {
            path: path.resolve(__dirname, '../build/assets'),
            filename: '[name].bundle.js',
            publicPath: '/assets',
        },

        module: {
            rules: [
                {
                    test: /.js?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015', 'stage-0', 'react']
                    }
                }, {
                    test: /\.(sass|scss)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                }, {
                    test: /\.(jpg|png|gif)$/,
                    loader: 'file-loader'
                }, {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader?limit=100000'
                }
            ]
        },

        devServer: {
            port: 8000,
            host: 'localhost',
            historyApiFallback: true,
            noInfo: false,
            stats: 'minimal',
            contentBase: path.resolve(__dirname, '../src/www'),
        }
    }
}