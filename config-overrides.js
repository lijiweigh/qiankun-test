const { overrideDevServer, override } = require("customize-cra");

const addProxy = () => (configFunction) => {
    configFunction.proxy = {
        '/api/': {
          target: 'http://xyst-test.zhenguanyu.com/',
          changeOrigin: true,
          ws: false,
          onProxyReq (proxyReq) {
            if (proxyReq.getHeader('origin')) {
              proxyReq.setHeader('origin', 'http://xyst-test.zhenguanyu.com/');
            }
          }
        },
    };

    return configFunction;
}

module.exports = {
  devServer: overrideDevServer(
    addProxy()
  )
}