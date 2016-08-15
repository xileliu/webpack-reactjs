var path = require('path');

module.exports = {
    entry: [
      path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};
