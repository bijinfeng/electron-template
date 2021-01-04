/* eslint-disable @typescript-eslint/no-var-requires */
const { override, addLessLoader, adjustStyleLoaders } = require('customize-cra');

module.exports = override(
  addLessLoader({
    lessOptions: {
      strictMath: true,
      noIeCompat: true,
      modifyVars: {
        '@primary-color': '#1DA57A', // for example, you use Ant Design to change theme color.
      },
    },
    sourceMap: true,
  }),
  adjustStyleLoaders(({ use: [, css] }) => {
    css.options.sourceMap = true;
    css.options.modules = {
      // 配置默认的样式名称规则
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
    };
  }),
);
