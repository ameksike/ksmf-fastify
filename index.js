const FastifyServer = require('./src/FastifyServer');
module.exports = new (class extends FastifyServer {
    cls = {
        Server: FastifyServer,
        Response: require('./src/FastifyResponse'),
        Request: require('./src/FastifyRequest'),
        middleware: {
            cookie: require('@fastify/cookie'),
            static: require('serve-static')
        }
    };
});