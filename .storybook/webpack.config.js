// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.


module.exports = (storybookBaseConfig, configType) => {
  const plugins = [
    {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loaders: ['graphql-tag/loader']
    },
    {
      test: /plugin\.css$/,
      loaders: [
        'style', 'css',
      ],
    }
  ];
  plugins.map(plugin => storybookBaseConfig.module.loaders.push(plugin));


  return storybookBaseConfig;
};
