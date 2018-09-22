const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const history = require('connect-history-api-fallback');
// const convert = require('koa-connect');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/utils/polyfill.js', './src/index.js'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              require('@babel/plugin-proposal-object-rest-spread'),
              require('@babel/plugin-syntax-dynamic-import'),
              require('babel-plugin-transform-class-properties')
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')(),
                require('postcss-nesting')(),
                require('postcss-custom-properties')({ preserve: false })
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src', 'dump', 'components'),
      pages: path.resolve(__dirname, 'src', 'dump', 'pages'),
      utils: path.resolve(__dirname, 'src', 'utils'),
      containers: path.resolve(__dirname, 'src', 'containers'),
      styles: path.resolve(__dirname, 'src', 'styles'),
      assets: path.resolve(__dirname, 'src', 'assets')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify('http://box-staging.ap-southeast-1.elasticbeanstalk.com'),
        G_RECAPCHA_KEY: JSON.stringify('6LfE7lgUAAAAAFbMu0mQjQ0nhZQwQOBQzyKUwl7A')
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', 'assets'),
        to: path.resolve(__dirname, 'dist'),
        toType: 'dir'
      }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: [path.resolve(__dirname, 'dist')],
    port: 1337,
    historyApiFallback: true,
    hot: true
  }
};

// https://github.com/webpack-contrib/webpack-serve/blob/master/docs/addons/history-fallback.config.js
// module.exports.serve = {
//   content: [path.resolve(__dirname, 'dist')],
//   port: 1337,
//   add: (app /*, middleware, options*/) => {
//     var historyOptions = {
//       // ... see: https://github.com/bripkens/connect-history-api-fallback#options
//     };

//     app.use(convert(history(historyOptions)));
//   }
// };
