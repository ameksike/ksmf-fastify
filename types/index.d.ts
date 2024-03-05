declare const _exports: {
    cls: {
        Server: typeof FastifyServer;
        Response: typeof import("./src/FastifyResponse");
        Request: typeof import("./src/FastifyRequest");
        middleware: {
            cookie: typeof import("@fastify/cookie");
            static: typeof import("serve-static");
        };
    };
    name: string;
    configure(payload?: {
        web?: any;
        drv?: any;
        logger?: any;
        helper?: any;
        option?: any;
        cookie?: boolean;
    }): Promise<FastifyServer>;
    web: any;
    drv: any;
    initCookie(option?: {
        secret?: string;
    }): void;
    initFingerprint(config?: any, web?: any): void;
    initSession(config?: any, web?: any): void;
    session: import("ksmf/types/src/server/Session");
    publish(url: string, path: string): void;
    del(value: string | string[], check?: Function): boolean;
    set(payload: {
        route: string;
        method: string;
        options?: any;
        handler: import("./src/types").TFnHandler;
        middlewares?: import("./src/types").TFnHandler[];
    }): any;
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
    stop(): void;
    onError(callback: Function): void;
    onRequest(callback: Function): void;
    onResponse(callback: Function): void;
    on404(callback: Function): void;
    routes(web: any): any[];
    helper: any;
    option: any;
    cookie: any;
    logger: Console;
    initCors(config?: any, web?: any): void;
    add(...arg: any[]): void;
    use(...arg: any[]): void;
    get(...arg: any[]): void;
    post(...arg: any[]): void;
    put(...arg: any[]): void;
    delete(...arg: any[]): void;
    patch(...arg: any[]): void;
    options(...arg: any[]): void;
    register(plugin: any, options: any): any;
    unregister(plugin: any, options: any): any;
    setDependencies(options: any): any;
    inject(options: any): any;
    getMissingDependencies(list: string | string[]): string[];
    checkDependencies(list: string | string[], ErrorType?: ErrorConstructor): import("ksdp/types/src/integration/Dip");
};
export = _exports;
import FastifyServer = require("./src/FastifyServer");
