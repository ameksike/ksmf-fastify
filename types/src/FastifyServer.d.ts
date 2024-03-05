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
     * @param {Object} [option]
     * @param {String} [option.secret]
     */
    initCookie(option?: {
        secret?: string;
    }): void;
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
    set(payload: {
        route: string;
        method: string;
        options?: any;
        handler: import('./types').TFnHandler;
        middlewares?: Array<import('./types').TFnHandler>;
    }): any | null;
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
