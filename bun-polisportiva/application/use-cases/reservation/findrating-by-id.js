import sportsField from "../../../src/entities/sportsfield"
import { ResponseError } from "../../../src/exceptions/response-error"

export default async function findRatingById(id, reservationDbRepository, reservationsRatingDbRepository) {

    try {
        const reservationDetail = await reservationDbRepository.findById(id)
        if (!reservationDetail) throw new ResponseError(404, "RESERVATION_NOT_FOUND", "Not found", "Reservation is not found")

        const reservationRating = await reservationsRatingDbRepository.findByReservationId(reservationDetail.id)
           
        return {
            reservation: reservationDetail,
            rating: reservationRating
        }
    } catch (error) {
        throw error
    }



}