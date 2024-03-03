/**
 * @author		Antonio Membrides Espinosa
 * @email		tonykssa@gmail.com
 * @date		28/02/2024
 * @copyright  	Copyright (c) 2020-2030
 * @license    	GPL
 * @version    	1.0
 * @link        https://fastify.dev/docs/latest/Reference/Reply/
 * @link        https://expressjs.com/en/4x/api.html#res
 */

const ksmf = require('ksmf');
const BaseResponse = ksmf.server.Response;

class FastifyResponse extends BaseResponse {

    /**
     * @param {*} driver 
     */
    constructor(driver) {
        super(driver)
        this.name = 'fastify';
    }
}
module.exports = FastifyResponse;