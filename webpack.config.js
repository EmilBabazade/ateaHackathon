"use strict";

const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        filename: '[name].js',
        assetModuleFilename: 'src/assets/images/[name].[ext]',
        globalObject: 'this',
        path: path.resolve('./build'),
        publicPath: '/'
    },
    /* optimization: {
         runtimeChunk: {
             name: 'runtime', // necessary when using multiple entrypoints on the same page
         },
         splitChunks: {
             cacheGroups: {
                 commons: {
                     test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                     name: 'vendor',
                     chunks: 'all',
                 },
             },
         },
     },*/
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
                type: 'asset/resource'
            },

        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    devtool: "inline-source-map",
   /* devServer: {
        publicPath: '/public/',
        host: '0.0.0.0',
        open: ['http://locahost:8080'],
        openPage: 'public/index.html'
    },*/
    plugins:
        [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new WebpackManifestPlugin({
                fileName: 'asset-manifest.json',
                generate: (seed, files) => {
                    const manifestFiles = files.reduce((manifest, file) => {
                        manifest[file.name] = file.path;
                        return manifest;
                    }, seed);

                    const entrypointFiles = files.filter(x => x.isInitial && !x.name.endsWith('.map')).map(x => x.path);

                    return {
                        files: manifestFiles,
                        entrypoints: entrypointFiles,
                    };
                },
            }),
            new WebpackNotifierPlugin(),
        ]
};