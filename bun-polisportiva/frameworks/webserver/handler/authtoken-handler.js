import tokenController from "../../../adapters/controllers/token-controller";
import userRepositoryInterface from "../../../application/repositories/user-repository";
import authServiceInterface from "../../../application/services/auth-service";
import config from "../../../config/config";
import { ResponseError } from "../../../src/exceptions/response-error"
import userRepositoryImpl from "../../database/postgres/repositories/user-repository";
import authServiceImpl from "../../service/auth-service";

export default async function authTokenHandler(request, reply) {
    // const token = request.headers.authorization

    const controller = tokenController(authServiceInterface, authServiceImpl(config.jwtSecret))

    const { decoded } = await controller.verify({ request });
    request.user = decoded.user;
}