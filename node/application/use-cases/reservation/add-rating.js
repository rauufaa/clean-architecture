import ReservationRating from "../../../src/entities/reservation-rating.js"
import { DomainError } from "../../../src/domain/error/domain-error.js"

export default async function addRating(id, {
    rating,
    description
}, reservationDbRepository, reservationsRatingDbRepository) {
    try {
        const reservationResult = await reservationDbRepository.findById(id)
        if (!reservationResult) throw new DomainError(404, "RESERVATION_NOT_FOUND", "Not found", "Reservation is not found")

        const newRating = new ReservationRating({
            rating,
            description,
            reservationId: id
        })

        const newReservationRatingResult = await reservationsRatingDbRepository.add(newRating)

        return {
            reservation: reservationResult,
            rating: newReservationRatingResult
        }
    } catch (error) {
        throw error
    }



}

async function findUserAndAddress(userId, userRepo, addressRepo) {
    const user = userId ? await userRepo.findById(userId) : null;
    const address = user?.addressId ? await addressRepo.findById(user.addressId) : null;
    return { user, address };
}