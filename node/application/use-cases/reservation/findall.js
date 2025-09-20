export default async function findAll(sort = "asc", page, limit, reservationDbRepository) {
    const skip = page && limit ? (page - 1) * limit : null;

    try {
        const reservationResult = skip !== null
            ? await reservationDbRepository.findAllPaginated(sort, skip, limit)
            : await reservationDbRepository.findAll(sort)

        return reservationResult
    } catch (error) {
        throw error
    }


}