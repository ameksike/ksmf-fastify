const FastifyServer = require('./src/FastifyServer');

class FastifyPlugin extends FastifyServer {
    static cls = {
        Server: FastifyServer,
        Response: require('./src/FastifyResponse'),
        Request: require('./src/FastifyRequest'),
        middleware: {}
    };
};

module.exports = FastifyPlugin;