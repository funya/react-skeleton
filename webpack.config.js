module.exports = {
    cache: true,
    entry: [ './app.js' ],
    output: { path: __dirname + '/', filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel?loose=all'
            }
        ]
    },
    resolve: { extensions: ['', '.js'] }
};
