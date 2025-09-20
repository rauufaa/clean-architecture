import { DomainError } from "../../../src/domain/error/domain-error.js";

export default async function findById(id, reservationDbRepository, sportsFieldDbRepository, userDbRepository, addressDbRepository) {

    try {
        const reservationResult = await reservationDbRepository.findById(id);
        if (!reservationResult) throw new DomainError(404, "RESERVATION_NOT_FOUND", "Not found", "Reservation is not found")

        const reservationUserResult = await findUserAndAddress(reservationResult?.userId, userDbRepository, addressDbRepository)

        const sportsFieldResult = (reservationResult.sportsFieldId !== null)
            ? await sportsFieldDbRepository.findById(reservationResult.sportsFieldId)
            : null

        const sportsFieldUserResult = await findUserAndAddress(sportsFieldResult?.userId, userDbRepository, addressDbRepository)



        return {
            detail: reservationResult,
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