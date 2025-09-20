import { ResponseError } from "../../../src/exceptions/response-error.js";
import authHandler from "../handler/authtoken-handler.js";

export default async function protectedRouteHook(request, reply) {
    try {
        await authHandler(request)
    } catch (error) {
        throw error
    }
}