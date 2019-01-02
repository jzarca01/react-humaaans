const fs = require('fs');
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const babelConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, './.babelrc'))
);

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: ['react-humaaans'],
    libraryTarget: 'umd',
    publicPath: '/lib/'
  },
  module: {
    rules: [
      {
        test: /\.ttf$/,
        loader: 'url-loader',
        include: path.resolve(
          __dirname,
          '../node_modules/react-native-vector-icons'
        )
      },
      {
        // Many react-native libraries do not compile their ES6 JS.
        test: /\.js$/,
        include: [
          /node_modules\/react-native-/,
          path.join(__dirname, '../src')
        ],
        exclude: /node_modules\/react-native\//,
        loader: 'babel-loader',
        options: {
          presets: ['react-native'], // Use default babel-presets-react-native
          plugins: [
            'syntax-trailing-function-commas', // Fix a extra comma in react-native
            'transform-flow-strip-types' // Strip flow types in react-native source code.
          ]
        }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: 'images/[name]-[hash:16].[ext]' }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [autoprefixer]
      }
    })
  ]
};
