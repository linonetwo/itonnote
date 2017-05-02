// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  console.log(storybookBaseConfig.module.loaders[0].query.presets)
  storybookBaseConfig.module.loaders = [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        babelrc: false,
        cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/react-storybook'),
        "presets": ["flow", "react", ["es2015"], "stage-2"],
        "plugins": [
          "transform-runtime",
          "transform-decorators-legacy",
          "transform-class-properties",
          "flow-runtime"
        ]
      }
    },
    {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loaders: ['graphql-tag/loader']
    },
    {
      test: /\.css$/,
      loaders: [
        'style', 'css',
      ],
    }
  ];

  return storybookBaseConfig;
};
