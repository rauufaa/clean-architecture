import tokenController from "../../../adapters/controllers/token-controller.js";
import authServiceInterface from "../../../application/services/auth-service.js";
import authServiceImpl from "../../service/auth-service.js";

export default function authTokenHandler(config) {
    return async (request, reply) => {
        const controller = tokenController(authServiceInterface, authServiceImpl(config.jwt.secret))

        const { decoded } = await controller.verify({ request });
        request.user = decoded.user;
    }
}