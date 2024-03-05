export type TFnMiddleware = (req?: import('fastify').FastifyRequest, res?: import('fastify').FastifyReply) => any;
export type TFnHandler = (req?: any, res?: any, next?: Function | null) => any;
export type TFnHandlerError = (error?: Error, req?: any, res?: any) => any;
export type TFnHandlerHook = (req?: import('fastify').FastifyRequest, res?: import('fastify').FastifyReply, next?: Function) => any;
