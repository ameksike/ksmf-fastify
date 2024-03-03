export = FastifyServer;
declare const FastifyServer_base: typeof import("ksmf/types/src/server/BaseServer");
declare class FastifyServer extends FastifyServer_base {
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
    configure(payload?: {
        web?: any;
        drv?: any;
        logger?: any;
        helper?: any;
        option?: any;
        cookie?: boolean;
    }): Promise<FastifyServer>;
    /**
     * @description add cookie support
     * @param {Object} [cookie]
     * @param {String} [cookie.secret]
     */
    initCookie(cookie?: {
        secret?: string;
    }): void;
    /**
     * @description set a route
     *
     * @callback Handler
     * @param {Object} [req]
     * @param {Object} [res]
     * @param {Function} [next]
     *
     * @param {Object} payload
     * @param {String} payload.route
     * @param {String} payload.method
     * @param {Handler} payload.handler
     * @param {Array} payload.middlewares
     * @returns {Object}
     */
    set(payload: any): any;
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
    start(payload?: {
        port?: number;
        key?: string;
        cert?: string;
        host?: string;
        protocol?: string;
        secure?: boolean;
        app?: any;
        callback?: Function;
    }): Promise<any>;
    /**
     * @description event on server error
     * @param {Function} callback
     */
    onError(callback: Function): void;
    /**
     * @description event on incoming request
     * @param {Function} callback
     */
    onRequest(callback: Function): void;
    /**
     * @description event on incoming response
     * @param {Function} callback
     */
    onResponse(callback: Function): void;
    /**
     * @description event on page not found
     * @param {Function} callback
     */
    on404(callback: Function): void;
    /**
     * @description get the route list
     * @param {*} web
     * @returns {Array<*>} routes
     */
    routes(web: any): Array<any>;
}
