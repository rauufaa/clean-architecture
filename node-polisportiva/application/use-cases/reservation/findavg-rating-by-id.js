// import sportsField from "../../../src/entities/sportsfield"
import { ResponseError } from "../../../src/exceptions/response-error.js"

export default async function findAvgRatingById(id, dbRepositoryReservation, dbRepositoryReservationRating, dbRepositorySportsField) {

    try {
        const reservationDetail = await dbRepositoryReservation.findById(id)
        if (!reservationDetail) throw new ResponseError(404, "RESERVATION_NOT_FOUND", "Not found", "Reservation is not found")

        const reservationAvgRatings = await dbRepositoryReservationRating.findAvgRatingByReservationId(reservationDetail.id)
        // if (!reservationAvgRatings) throw new ResponseError(404, "Show is not found")
        
        return reservationAvgRatings
    } catch (error) {
        throw error
    }



}