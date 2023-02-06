"use strict";

const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');


module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: '[name].js',
        assetModuleFilename: 'src/assets/images/[name].[ext]',
        globalObject: 'this',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/'
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
    plugins:
        [
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