const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/solar-notify-admin',
    createProxyMiddleware({
      target: 'http://xyst-test.zhenguanyu.com/',
      changeOrigin: true,
      ws: false,
      onProxyReq (proxyReq) {
        if (proxyReq.getHeader('origin')) {
          proxyReq.setHeader('origin', 'http://xyst-test.zhenguanyu.com/');
        }
      }
    })
  );
};