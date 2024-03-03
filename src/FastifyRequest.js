/**
 * @author		Antonio Membrides Espinosa
 * @email		tonykssa@gmail.com
 * @date		28/02/2024
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * @link        https://fastify.dev/docs/latest/Reference/Request/
 * @link        https://expressjs.com/en/4x/api.html#req
 */

const ksmf = require('ksmf');
const BaseRequest = ksmf.server.Request;
class FastifyRequest extends BaseRequest {

    constructor(driver) {
        super(driver);
        this.name = 'fastify';
    }
}
module.exports = FastifyRequest;