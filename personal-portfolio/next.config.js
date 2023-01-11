const webpack = require('webpack');
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias, // Keep the existing aliases
      '@components': path.resolve(__dirname, 'components'),
      '@public': path.resolve(__dirname, 'public'),
    };
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
    );
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'graphql-tag/loader',
      }],
    });
    return config;
  },
};
