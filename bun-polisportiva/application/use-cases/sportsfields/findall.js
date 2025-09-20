import { ResponseError } from "../../../src/exceptions/response-error";

export default async function findAll(userId, sportName, sort = "asc", page, limit, sportsFieldDbRepository) {


    const hasPagination = page && limit;
    const skip = hasPagination ? (page - 1) * limit : null;

    let sportsFields;

    try {
        if (userId && sportName && hasPagination) {
            sportsFields = await sportsFieldDbRepository.findAllByUserIdSportNamePaginated(userId, sportName, sort, skip, limit);
        } else if (userId && hasPagination) {
            sportsFields = await sportsFieldDbRepository.findAllByUserIdPaginated(userId, sort, skip, limit);
        } else if (sportName && hasPagination) {
            sportsFields = await sportsFieldDbRepository.findAllBySportNamePaginated(sportName, sort, skip, limit);
        } else if (userId && sportName) {
            sportsFields = await sportsFieldDbRepository.findAllByUserIdSportName(userId, sort, sportName);
        } else if (userId) {
            sportsFields = await sportsFieldDbRepository.findAllByUserId(userId, sort);
        } else if (sportName) {
            sportsFields = await sportsFieldDbRepository.findAllBySportName(sportName, sort);
        } else if (hasPagination) {
            sportsFields = await sportsFieldDbRepository.findAllPaginated(sort, skip, limit);
        } else {
            sportsFields = await sportsFieldDbRepository.findAll(sort);
        }

        return { sportsFields }
    } catch (error) {
        throw error
    }


}