import tokenController from "../../../adapters/controllers/token-controller.js";
import userRepositoryInterface from "../../../application/repositories/user-repository.js";
import authServiceInterface from "../../../application/services/auth-service.js";
import config from "../../../config/config.js";
import { ResponseError } from "../../../src/exceptions/response-error.js"
import userRepositoryImpl from "../../database/postgres/repositories/user-repository.js";
import authServiceImpl from "../../service/auth-service.js";

export default async function authTokenHandler(request, reply) {
    // const token = request.headers.authorization

    const controller = tokenController(authServiceInterface, authServiceImpl(config.jwtSecret))

    const { decoded } = await controller.verify({ request });
    request.user = decoded.user;
}