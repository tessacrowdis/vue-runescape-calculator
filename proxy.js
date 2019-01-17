const httpProxy = require('http-proxy');
const options = {
    target: 'https://secure.runescape.com',
    changeOrigin: true,
    hostRewrite: true,
    autoRewrite: true,
}

const proxy = httpProxy.createProxyServer(options);

proxy.on('proxyRes', function (proxyRes, req, res) {
    console.log('okay, we got it');
    proxyRes.headers['access-control-allow-origin'] = '*';
})

proxy.listen(9000);
