import { ResponseError } from "../../../src/exceptions/response-error";

export default async function onRequest(request, reply) {
    if (request.headers['content-type'] !== 'application/json') {
        throw new ResponseError(415, "Unsupported Media Type")
    }

}