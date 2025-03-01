const path = require('path');
const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const projectDir = path.resolve(__dirname, '../../../');

module.exports = {
  entry: {
    main: path.join(projectDir, './assets/index.js'),
    public: path.join(projectDir, './assets/share.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(projectDir, 'web/build'),
    publicPath: '',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
    new StyleLintPlugin({
      configFile: 'stylelint.config.js',
      failOnError: false,
      quiet: false,
      context: 'assets',
      files: '**/*.scss',
    }),
  ],
  resolve: {
    alias: {
      jquery: path.join(projectDir, 'node_modules/jquery/dist/jquery.js'),
    },
  },
};
