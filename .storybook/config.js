import { configure } from '@kadira/storybook';

const defines = {
  __CLIENT__: true, __SERVER__: false, __SSR__: false,
  __DEV__: true, 'process.env.NODE_ENV': '"development"'
};

for (const define in defines) {
  global[define] = defines[define];
}

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
