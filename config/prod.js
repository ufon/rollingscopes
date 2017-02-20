const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
    return {
        context: path.resolve(__dirname, '../src'),

        entry: {
            app: ['babel-polyfill', './index.js'],
        },

        output: {
            path: path.resolve(__dirname, '../build'),
            filename: '[name].bundle.js',
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
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader!sass-loader",
                    }),
                }, {
                    test: /\.(jpg|png|gif)$/,
                    loader: 'file-loader'
                }, {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader?limit=100000'
                }, {
                    test: /\.html$/,
                    loader: 'html-loader'
                }
            ]
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new HtmlWebpackPlugin({
                template: '../config/templates/index.html',
                inject: 'body',
            }),
            new ExtractTextPlugin("styles.css"),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })
        ],
    }
}