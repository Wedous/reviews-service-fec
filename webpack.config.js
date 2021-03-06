const path = require('path');

module.exports = {
    entry: './client/index.js',
    output:{
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            query: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        }
      ]
    }
  };