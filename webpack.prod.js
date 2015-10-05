var conf = require('./webpack.config');
var webpack = require('webpack');

conf.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            'hoist_vars': true,
            'screw_ie8': true,
            'warnings': false
        }
    })
];

module.exports = conf;
