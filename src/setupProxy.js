const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.SERVER_HOST || 'http://localhost:3010', // SERVER_HOST set in gitpod.yml for Gitpod development
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/', // remove base path
      }
    })
  );
};
