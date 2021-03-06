/**
 * Created by aclinton on 11/9/16.
 */
var path = require('path');

module.exports = {
    context: __dirname + "/src",
    entry: "./index.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/build",
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.woff(\d*)\??(\d*)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf\??(\d*)$/, loader: "file-loader"},
            {test: /\.eot\??(\d*)$/, loader: "file-loader"},
            {test: /\.svg\??(\d*)$/, loader: "file-loader"},
            {test: /\.scss$/, loader: "style!css!sass?sourceMap"},
            {
                test: '/materialize-css/bin/',
                loader: 'imports?jQuery=jquery,$=jquery,hammerjs'
            }
        ]
    },
    vue: {
        loaders: {
            sass: "vue-style-loader!css-loader!sass?indentedSyntax"
        }
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    jshint: {
        esversion: 6,
        asi: true
    }
}
