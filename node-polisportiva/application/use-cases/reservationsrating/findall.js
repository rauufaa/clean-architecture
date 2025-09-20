export default async function findAll(sort = "asc", page, limit, reservationsRatingDbRepository) {
    const skip = page && limit ? (page - 1) * limit : null;

    try {
        const result = skip !== null
            ? await reservationsRatingDbRepository.findAll(sort)
            : await reservationsRatingDbRepository.findAllPaginated(sort, skip, limit)

        return result
    } catch (error) {
        throw error
    }


}