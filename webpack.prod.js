const path = require('path');
const common = require('./webpack.common');

module.exports = {
  ...common,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'client/public'),
    filename: '[fullhash].js',
  },
  performance: {
    maxAssetSize: 5000000, // Increase the asset size limit (in bytes)
    maxEntrypointSize: 5000000, // Increase the entrypoint size limit (in bytes)
  },
};
