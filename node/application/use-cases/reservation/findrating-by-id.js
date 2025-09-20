import { DomainError } from "../../../src/domain/error/domain-error.js"

export default async function findRatingById(id, reservationDbRepository, reservationsRatingDbRepository) {

    try {
        const reservationDetail = await reservationDbRepository.findById(id)
        if (!reservationDetail) throw new DomainError(404, "RESERVATION_NOT_FOUND", "Not found", "Reservation is not found")

        const reservationRating = await reservationsRatingDbRepository.findByReservationId(reservationDetail.id)

        return {
            reservation: reservationDetail,
            rating: reservationRating
        }
    } catch (error) {
        throw error
    }



}