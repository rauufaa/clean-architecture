import reservationController from "../../../../adapters/controllers/reservation-controller.js"
import addressRepositoryInterface from "../../../../application/repositories/address-repository.js"
import reservationRepositoryInterface from "../../../../application/repositories/reservation-repository.js"
import reservationsRatingRepositoryInterface from "../../../../application/repositories/reservationsrating-repository.js"
import sportsFieldRepositoryInterface from "../../../../application/repositories/sportsfield-repository.js"
import userRepositoryInterface from "../../../../application/repositories/user-repository.js"
import addressRepositoryImpl from "../../../database/postgres/repositories/address-repository.js"
import reservationRatingRepositoryImpl from "../../../database/postgres/repositories/reservationsrating-repository.js"
import reservationRepositoryImpl from "../../../database/postgres/repositories/reservation-repository.js"
import sportsFieldRepositoryImpl from "../../../database/postgres/repositories/sportsfield-repository.js"
import userRepositoryImpl from "../../../database/postgres/repositories/user-repository.js"
import { getReservationSchema } from "./schemas/reservation/get-reservation.js"
import { getReservationRatingSchema } from "./schemas/reservation/get-reservationrating.js"
import { getReservationsSchema } from "./schemas/reservation/get-reservations.js"
import { postReservationSchema } from "./schemas/reservation/post-reservation.js"
import { postReservationRatingSchema } from "./schemas/reservation/post-reservationrating.js"
import { putReservationStatusSchema } from "./schemas/reservation/put-reservationstatus.js"

export default async function reservationRoute(fastify, opts) {
    const {authHandler} = opts
    const controller = reservationController(
        reservationRepositoryInterface,
        reservationRepositoryImpl,
        reservationsRatingRepositoryInterface,
        reservationRatingRepositoryImpl,
        userRepositoryInterface,
        userRepositoryImpl,
        sportsFieldRepositoryInterface,
        sportsFieldRepositoryImpl,
        addressRepositoryInterface,
        addressRepositoryImpl
    )

    fastify.get('/', { schema: getReservationsSchema, onRequest: [authHandler] }, async (request, reply) => {
        const result = await controller.getReservations({request})
        reply.code(result.statusCode).send(result)

    })

    fastify.post('/', { schema: postReservationSchema, onRequest: [authHandler] }, async (request, reply) => {
        const result = await controller.postReservation({request})
        reply.code(result.statusCode).send(result)

    })

    fastify.get('/:id', { schema: getReservationSchema, onRequest: [authHandler] }, async (request, reply) => {
        const result = await controller.getReservation({request})
        reply.code(result.statusCode).send(result)

    })
    fastify.put('/:id/status', { schema: putReservationStatusSchema, onRequest: [authHandler] }, async (request, reply) => {
        const result = await controller.putReservationStatus({request})
        reply.code(result.statusCode).send(result)

    })

    fastify.get('/:id/rating', { schema: getReservationRatingSchema, onRequest: [authHandler] }, async (request, reply) => {
        const result = await controller.getReservationRating({request})
        reply.code(result.statusCode).send(result)

    })
    fastify.post('/:id/rating', { schema: postReservationRatingSchema, onRequest: [authHandler] }, async (request, reply) => {
        const result = await controller.postReservationRating({request})
        reply.code(result.statusCode).send(result)

    })
}