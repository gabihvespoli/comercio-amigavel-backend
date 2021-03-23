// const app = require('./src/app');

// const PORT = process.env.PORT || 3333

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// });

const app = require('./src/app');

var HOST = process.env.HOST || '0.0.0.0';

const PORT = process.env.PORT || 3333;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, HOST, function() {
    console.log('Running CORS Anywhere on ' + HOST + ':' + PORT);
});