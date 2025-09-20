import Reservation from "../../../src/entities/reservation.js";
import ReservationStatus from "../../../src/entities/reservation-status.js";

export default async function add({ sportsFieldId, userId, dateRange: { startDate, endDate } }, reservationDbRepository, userDbRepository, sportsFieldDbRepository, addressDbRepository) {
    const newReservation = new Reservation({
        
        startDate,
        endDate,
        createdAt: new Date().toISOString(),
        state: ReservationStatus.PENDING,
        price: 0,
        userId,
        sportsFieldId,
    })

    try {
        
        const newReservationResult = await reservationDbRepository.add(newReservation)
        // if (!newReservationResult) throw new ResponseError(404, "Failed to add new reservation")

        const reservationUserResult = await findUserAndAddress(newReservationResult?.userId, userDbRepository, addressDbRepository)

        const sportsFieldResult = (newReservationResult.sportsFieldId !== null)
            ? await sportsFieldDbRepository.findById(newReservationResult.sportsFieldId)
            : null

        const sportsFieldUserResult = await findUserAndAddress(sportsFieldResult?.userId, userDbRepository, addressDbRepository)


        return {
            reservation: newReservationResult,
            owner: reservationUserResult,
            sportsField: {
                detail: sportsFieldResult,
                owner: sportsFieldUserResult,
            },
        };

    } catch (error) {
        throw error
    }
}

async function findUserAndAddress(userId, userRepo, addressRepo) {
    const user = userId ? await userRepo.findById(userId) : null;
    const address = user?.addressId ? await addressRepo.findById(user.addressId) : null;
    return { user, address };
}
