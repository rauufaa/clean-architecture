import sportsFacilityController from "../../../../adapters/controllers/sportsfacility-controller.js"
import addressRepositoryInterface from "../../../../application/repositories/address-repository.js"
import priceListRepositoryInterface from "../../../../application/repositories/pricelist-repository.js"
import sportsFacilityRepositoryInterface from "../../../../application/repositories/sportsfacility-repository.js"
import sportsFieldRepositoryInterface from "../../../../application/repositories/sportsfield-repository.js"
import userRepositoryInterface from "../../../../application/repositories/user-repository.js"
import addressRepositoryImpl from "../../../database/postgres/repositories/address-repository.js"
import priceListRepositoryImpl from "../../../database/postgres/repositories/pricelist-repository.js"
import sportsFacilityRepositoryImpl from "../../../database/postgres/repositories/sportsfacility-repository.js"
import sportsFieldRepositoryImpl from "../../../database/postgres/repositories/sportsfield-repository.js"
import userRepositoryImpl from "../../../database/postgres/repositories/user-repository.js"
import { getSportsFacilitiesSchema } from "./schemas/sportsfacility/get-sportsfacilities.js"
import { getSportsFacilitySchema } from "./schemas/sportsfacility/get-sportsfacility.js"
import { postSportsFieldSchema } from "./schemas/sportsfacility/post-sportsfield.js"

export default async function sportsFacilityRoute(fastify, opts) {
    const {authHandler} = opts
    const controller = sportsFacilityController(
        sportsFacilityRepositoryInterface,
        sportsFacilityRepositoryImpl,
        sportsFieldRepositoryInterface,
        sportsFieldRepositoryImpl,
        priceListRepositoryInterface,
        priceListRepositoryImpl,
        userRepositoryInterface,
        userRepositoryImpl,
        addressRepositoryInterface,
        addressRepositoryImpl
    )

    fastify.get('/', { schema: getSportsFacilitiesSchema, onRequest: [authHandler] }, async (request, reply) => {
        const result = await controller.getSportsFacilities({request})
        reply.code(result.statusCode).send(result)

    })

    fastify.get('/:id', { schema: getSportsFacilitySchema, onRequest: [authHandler] }, async (request, reply) => {
        const result = await controller.getSportsFacility({request})
        reply.code(result.statusCode).send(result)

    })

    fastify.post('/:id/sports-fields', { schema: postSportsFieldSchema, onRequest: [authHandler] }, async (request, reply) => {
        const result = await controller.postSportsField({request})
        reply.code(result.statusCode).send(result)
    })

    
}