 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './js/main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader:  'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
            },
            { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
           },
           {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
