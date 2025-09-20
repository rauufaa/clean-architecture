import reservationStatus from "../../../src/entities/reservation-status.js"
import { DomainError } from "../../../src/domain/error/domain-error.js"

export default async function updateStateById(id, state, reservationDbRepository, userDbRepository, sportsFieldDbRepository, addressDbRepository) {

    if (state != reservationStatus.REJECTED && state != reservationStatus.ACCEPTED && state != reservationStatus.PENDING) {
        throw new DomainError(400, "RESERVATION_UPDATE_INVALID", "Bad request", "Reservation state field not valid")
    }

    try {


        const reservationUpdataResult = await reservationDbRepository.updateStateById(id, state)
        if (!reservationUpdataResult) throw new DomainError(404, "RESERVATION_NOT_FOUND", "Not found", "Reservation is not found")

        const reservationUserOwnerResult = await findUserAndAddress(reservationUpdataResult?.userId, userDbRepository, addressDbRepository)

        const sportsFieldResult = (reservationUpdataResult.sportsFieldId !== null)
            ? await sportsFieldDbRepository.findById(reservationUpdataResult.sportsFieldId)
            : null

        const sportsFieldUserOwnerResult = await findUserAndAddress(sportsFieldResult?.userId, userDbRepository, addressDbRepository)


        return {
            reservation: reservationUpdataResult,
            owner: reservationUserOwnerResult,
            sportsField: {
                detail: sportsFieldResult,
                owner: sportsFieldUserOwnerResult,
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