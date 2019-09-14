const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
  const isProd = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: ['babel-polyfill', './src/app.js'],
    mode: isProd ? 'production' : 'development',
    output: {
      path: path.resolve(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: { loader: 'babel-loader' },
          exclude: /node_modules/,
        },
        {
          test: /\s?.css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProd ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/',
    },
  };
};
