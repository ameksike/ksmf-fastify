
/**
 * @description Middleware function
 * @callback TFnMiddleware
 * @param {import('fastify').FastifyRequest} [req]
 * @param {import('fastify').FastifyReply} [res]
 */

/**
 * @callback TFnHandler
 * @param {Object} [req]
 * @param {Object} [res]
 * @param {Function|null} [next]
 */

/**
 * @callback TFnHandlerError
 * @param {Error} [error]
 * @param {Object} [req]
 * @param {Object} [res]
 */

/**
 * @callback TFnHandlerHook
 * @param {import('fastify').FastifyRequest} [req]
 * @param {import('fastify').FastifyReply} [res]
 * @param {Function} [next]
 */

module.exports = {};