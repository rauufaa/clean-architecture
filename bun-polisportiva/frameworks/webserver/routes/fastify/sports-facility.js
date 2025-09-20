import sportsFacilityController from "../../../../adapters/controllers/sportsfacility-controller"
import addressRepositoryInterface from "../../../../application/repositories/address-repository"
import priceListRepositoryInterface from "../../../../application/repositories/pricelist-repository"
import sportsFacilityRepositoryInterface from "../../../../application/repositories/sportsfacility-repository"
import sportsFieldRepositoryInterface from "../../../../application/repositories/sportsfield-repository"
import userRepositoryInterface from "../../../../application/repositories/user-repository"
import addressRepositoryImpl from "../../../database/postgres/repositories/address-repository"
import priceListRepositoryImpl from "../../../database/postgres/repositories/pricelist-repository"
import sportsFacilityRepositoryImpl from "../../../database/postgres/repositories/sportsfacility-repository"
import sportsFieldRepositoryImpl from "../../../database/postgres/repositories/sportsfield-repository"
import userRepositoryImpl from "../../../database/postgres/repositories/user-repository"
import authTokenHandler from "../../handler/authtoken-handler"
import onRequest from "../../hook/on-request"
import { getSportsFacilitiesSchema } from "./schemas/sportsfacility/get-sportsfacilities"
import { getSportsFacilitySchema } from "./schemas/sportsfacility/get-sportsfacility"
import { postSportsFieldSchema } from "./schemas/sportsfacility/post-sportsfield"

export default function sportsFacilityRoute(fastify) {
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

    fastify.get('/', { schema: getSportsFacilitiesSchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.getSportsFacilities({request})
        reply.code(result.statusCode).send(result)

    })

    fastify.get('/:id', { schema: getSportsFacilitySchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.getSportsFacility({request})
        reply.code(result.statusCode).send(result)

    })

    fastify.post('/:id/sports-fields', { schema: postSportsFieldSchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.postSportsField({request})
        reply.code(result.statusCode).send(result)
    })

    fastify.get('/:id/sports-fields',  async (request, reply) => {
        // const result = await controller.postSportsField({request})
        reply.code(200).send("angar")
    })
}