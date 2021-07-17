const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://139.59.29.141:8080',
      changeOrigin: true,
    })
  );
};