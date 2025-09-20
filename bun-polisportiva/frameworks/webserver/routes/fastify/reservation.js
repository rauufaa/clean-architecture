import reservationController from "../../../../adapters/controllers/reservation-controller"
import addressRepositoryInterface from "../../../../application/repositories/address-repository"
import reservationRepositoryInterface from "../../../../application/repositories/reservation-repository"
import reservationsRatingRepositoryInterface from "../../../../application/repositories/reservationsrating-repository"
import sportsFieldRepositoryInterface from "../../../../application/repositories/sportsfield-repository"
import userRepositoryInterface from "../../../../application/repositories/user-repository"
import addressRepositoryImpl from "../../../database/postgres/repositories/address-repository"
import reservationRatingRepositoryImpl from "../../../database/postgres/repositories/reservationsrating-repository"
import reservationRepositoryImpl from "../../../database/postgres/repositories/reservation-repository"
import sportsFieldRepositoryImpl from "../../../database/postgres/repositories/sportsfield-repository"
import userRepositoryImpl from "../../../database/postgres/repositories/user-repository"
import { getReservationSchema } from "./schemas/reservation/get-reservation"
import { getReservationRatingSchema } from "./schemas/reservation/get-reservationrating"
import { getReservationsSchema } from "./schemas/reservation/get-reservations"
import { postReservationSchema } from "./schemas/reservation/post-reservation"
import { postReservationRatingSchema } from "./schemas/reservation/post-reservationrating"
import { putReservationStatusSchema } from "./schemas/reservation/put-reservationstatus"
import authTokenHandler from "../../handler/authtoken-handler"

export default function reservationRoute(fastify) {
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

    fastify.get('/', { schema: getReservationsSchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.getReservations({request})
        reply.code(result.statusCode).send(result)

    })

    fastify.post('/', { schema: postReservationSchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.postReservation({request})
        reply.code(result.statusCode).send(result)

    })

    fastify.get('/:id', { schema: getReservationSchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.getReservation({request})
        reply.code(result.statusCode).send(result)

    })
    fastify.put('/:id/status', { schema: putReservationStatusSchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.putReservationStatus({request})
        reply.code(result.statusCode).send(result)

    })

    fastify.get('/:id/rating', { schema: getReservationRatingSchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.getReservationRating({request})
        reply.code(result.statusCode).send(result)

    })
    fastify.post('/:id/rating', { schema: postReservationRatingSchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.postReservationRating({request})
        reply.code(result.statusCode).send(result)

    })
}