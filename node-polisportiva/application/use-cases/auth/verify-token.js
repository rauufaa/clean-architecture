import { ResponseError } from "../../../src/exceptions/response-error.js";


export default async function verifyToken(token, authService) {
    if (!token) {
        throw new ResponseError(400,"AUTH_TOKEN_NOT_FOUND", "Bad request",'No access token found');
    }
    if (token.split(' ')[0] !== 'Bearer') {
        throw new ResponseError(400, "AUTH_TOKEN_FORMAT_INVALID", "Bad request",'Invalid access token format');
    }
    try {
        const decoded = await authService.verifyToken(token.split(' ')[1]);
        return { decoded };
    } catch (error) {
        console.log(error)
        throw new ResponseError(400, "AUTH_TOKEN_INVALID", "Bad request", "Token is not valid")
    }
}