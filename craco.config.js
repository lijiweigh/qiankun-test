const CracoAntDesignPlugin = require('craco-antd')
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' },
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        modifyLessRule(lessRule, context) {
          lessRule.test = /\.module\.less$/;
          lessRule.exclude = /node_modules/;
          // delete lessRule.exclude;
          return lessRule;
        },
      },
    },
  ],
}
