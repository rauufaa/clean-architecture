import sportsFieldsController from "../../../../adapters/controllers/sportsfield-controller.js"
import sportsFieldsRepositoryInterface from "../../../../application/repositories/sportsfield-repository.js"
import sportsFieldsRepositoryImpl from "../../../database/postgres/repositories/sportsfield-repository.js"
import authTokenHandler from "../../handler/authtoken-handler.js"
import { getSportsFieldSchema } from "./schemas/sportsfield/get-sportsfield.js"
import { getSportsFieldsSchema } from "./schemas/sportsfield/get-sportsfields.js"

export default function sportsFieldRoute(fastify) {
    const controller = sportsFieldsController(sportsFieldsRepositoryInterface, sportsFieldsRepositoryImpl)

    fastify.get('/', { schema: getSportsFieldsSchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.getSportsFields({ request })
        reply.code(result.statusCode).send(result)
    })

    fastify.get('/:id', { schema: getSportsFieldSchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.getSportsField({ request })
        reply.code(result.statusCode).send(result)
    })
}