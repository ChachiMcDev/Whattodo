const path = require('path')

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        path: path.join(__dirname + 'public'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [{
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            use: ['style-loader', 'css-loader', 'sass-loader'],
            test: /\.s?css$/
        }]
    }

}