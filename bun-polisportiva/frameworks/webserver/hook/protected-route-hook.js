import { ResponseError } from "../../../src/exceptions/response-error";
import authHandler from "../handler/authtoken-handler";

export default async function protectedRouteHook(request, reply) {
    try {
        await authHandler(request)
    } catch (error) {
        throw error
    }
}