var webpack = require('webpack');

module.exports = {
    // enable "devtool" to be able to debug minified code
    // devtool: 'source-map',
    entry: __dirname + "/src/Main.js",
    output: {
        path: __dirname + "/dist",
        filename: "App.js"
    },
    // watch for file changes and instantly re-compile
    // watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        colors: true,
        inline: true
    },
    // minify JS code
    //plugins: [
    //    new webpack.optimize.UglifyJsPlugin(),
    //]
};
