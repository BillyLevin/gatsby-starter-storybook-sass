require('imports-loader');

const path = require('path');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Add specific loader rule for CSS (SASS)
  config.module.rules.push({
    test: /\.s[ac]ss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../src'),
  });

  // ignore gatsby-link's global `__loader` variable
  config.module.rules.push({
    test: require.resolve('gatsby-link'),
    loaders: ['imports-loader?___loader=>{enqueue:function(){}}'],
  });

  return config;
};
