declare const _exports: {
    cls: {
        Server: typeof FastifyServer;
        Response: typeof import("./src/FastifyResponse");
        Request: typeof import("./src/FastifyRequest");
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
    initCookie(cookie?: {
        secret?: string;
    }): void;
    publish(url: string, path: string): void;
    del(value: string | string[], check?: Function): boolean;
    set(payload: any): any;
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
    session: any;
    logger: Console;
    initSession(session?: any): void;
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
};
export = _exports;
import FastifyServer = require("./src/FastifyServer");
