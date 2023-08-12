const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        Widget: './src/index.ts',
    },
    mode: 'development',
    output: {
        library: 'Widget',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: `widget.js`,
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss', 'svg'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{ loader: 'ts-loader' }],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'sass-to-string',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                outputStyle: 'compressed',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};