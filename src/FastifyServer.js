/**
 * @author		Antonio Membrides Espinosa
 * @email		tonykssa@gmail.com
 * @date		28/02/2024
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * @link        https://fastify.dev/docs/latest/Reference/Server/#https
 * @requires    fastify 
 * @requires    serve-static 
 * @requires    @fastify/cookie 
 * @requires    @fastify/middie
 */
const https = require('https');
const ksmf = require('ksmf');
const Fastify = require('fastify');

const mwMiddie = require('@fastify/middie');
const mwServeStatic = require('serve-static');
const mwCookie = require('@fastify/cookie');

const Response = require('./FastifyResponse');
const Request = require('./FastifyRequest');
class FastifyServer extends ksmf.server.Base {

    constructor() {
        super();
        this.name = 'fastify';
    }

    /**
     * @description configure the web server
     * @param {Object} [payload]
     * @param {Object} [payload.web]
     * @param {Object} [payload.drv]
     * @param {Object} [payload.logger]
     * @param {Object} [payload.helper]
     * @param {Object} [payload.option]
     * @param {Boolean} [payload.cookie] 
     * @returns {Promise<FastifyServer>} self
     */
    async configure(payload) {
        super.configure(payload);
        this.web = payload?.web || Fastify({ logger: !!payload?.logger });
        this.drv = payload?.drv || Fastify;
        this.drv.static = mwServeStatic;
        await this.web.register(mwMiddie);
        return this;
    }

    /**
     * @description add cookie support
     * @param {Object} [option]
     * @param {String} [option.secret] 
     */
    initCookie(option) {
        //... Allow cookie Parser
        this.web.register(mwCookie, {
            secret: option?.secret || '-ksmf-',
            parseOptions: {}
        });
    }

    /**
     * @description add Fingerprint support
     * @override
     * @param {Object|null} [config] 
     * @param {Object|null} [web] 
     */
    initFingerprint(config = null, web = null) {
        // TODO
    }

    /**
     * @description add session support
     * @override
     * @param {Object|null} [config] 
     * @param {Object|null} [web] 
     */
    initSession(config = null, web = null) {
        // TODO
        this.session = null;
    }

    /**
     * @description publish static files
     * @param {String} url 
     * @param {String} path 
     */
    publish(url, path) {
        //... Allow static files
        url && path && this.drv && this.web?.use(url, this.drv.static(path));
    }

    /**
     * @description delete routes 
     * @param {String|Array<String>} value 
     * @param {Function|null} [check] 
     * @returns {Boolean}
     */
    del(value, check = null) {
        // TODO
        return true;
    }

    /**
     * @description set a route
     * @param {Object} payload 
     * @param {String} payload.route 
     * @param {String} payload.method 
     * @param {Object} [payload.options] 
     * @param {import('./types').TFnHandler} payload.handler 
     * @param {Array<import('./types').TFnHandler>} [payload.middlewares] 
     * @returns {Object|null} 
     */
    set(payload) {
        const { route, middlewares, handler, method, options = {} } = payload;
        try {
            if (!this.web) {
                return null;
            }
            let action = this.web[method];
            if (!action || !handler || !(handler instanceof Function)) {
                return null;
            }
            if (middlewares) {
                // TODO
                // options.preHandler = Array.isArray(middlewares) ? middlewares : [middlewares];
            }
            return action.apply(this.web, [
                route,
                options,
                /**
                 * @type {import('./types').TFnMiddleware}
                 */
                (req, res) => handler(new Request(req), new Response(res), null)
            ]);
        }
        catch (_) {
            return null;
        }
    }

    /**
     * @description start the server
     * @param {Object} [payload] 
     * @param {Number} [payload.port]
     * @param {String} [payload.key]
     * @param {String} [payload.cert] 
     * @param {String} [payload.host] 
     * @param {String} [payload.protocol] 
     * @param {Boolean} [payload.secure] 
     * @param {Object} [payload.app] 
     * @param {Function} [payload.callback] 
     */
    start(payload) {
        const { key, cert, protocol = 'http', port = 3003, host = '127.0.0.1', app = this.web } = payload || {};
        return new Promise(async (resolve, reject) => {
            try {
                if (protocol === 'https' && key && cert) {
                    https.createServer({ key, cert }, app).listen(port, () => resolve({ port, host, protocol: 'https' }));
                } else {
                    let url = await app.listen({ port });
                    resolve({ port, host, protocol: 'http', url, provider: 'fastify' })
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }

    /**
     * @description stop server 
     */
    stop() {
        if (this.web?.close instanceof Function) {
            this.web.close();
        }
    }

    /**
     * @description event on server error
     * @param {Function} callback 
     */
    onError(callback) {
        callback instanceof Function && this.web.setErrorHandler(
            /**
             * @type {import('./types').TFnHandlerError}
             */
            (error, req, res) => callback(error, new Request(req), new Response(res), null)
        );
    }

    /**
     * @description event on incoming request
     * @param {Function} callback 
     */
    onRequest(callback) {
        callback instanceof Function && this.web.addHook(
            'onRequest',
            /**
             * @type {import('./types').TFnHandlerHook}
             */
            (req, res, next) => callback(new Request(req), new Response(res), next)
        );
    }

    /**
     * @description event on incoming response
     * @param {Function} callback 
     */
    onResponse(callback) {
        callback instanceof Function && this.web.addHook(
            'onResponse',
            /**
             * @type {import('./types').TFnHandlerHook}
             */
            (req, res, next) => callback(new Request(req), new Response(res), next)
        );
    }

    /**
     * @description event on page not found
     * @param {Function} callback 
     */
    on404(callback) {
        callback instanceof Function && this.web?.setDefaultRoute(
            /**
             * @type {import('./types').TFnMiddleware}
             */
            (req, res) => callback(new Request(req), new Response(res), null)
        );
    }

    /**
     * @description get the route list 
     * @param {*} web 
     * @returns {Array<*>} routes 
     */
    routes(web) {
        return [];
    }
}
module.exports = FastifyServer;