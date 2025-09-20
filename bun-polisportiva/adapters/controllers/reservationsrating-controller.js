import findAll from "../../application/use-cases/reservationsrating/findall";
import { ResponseError } from "../../src/exceptions/response-error";

export default function reservationsRatingController(
    reservationsRatingDbRepositoryInterface,
    reservationsRatingDbRepositoryImpl
) {

    const reservationsRatingDbRepository = reservationsRatingDbRepositoryInterface(reservationsRatingDbRepositoryImpl())
    const getReservationsRatings = async ({ request: {
        user,
        body,
        params,
        query
    } }) => {
        try {
            const result = await findAll(reservationsRatingDbRepository);
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success retrieved reservations ratings data",
                data: result
            }
        } catch (error) {
            throw error
        }
    }


    return {
        getReservationsRatings
    }
}