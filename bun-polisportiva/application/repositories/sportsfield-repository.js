export default function sportsFieldRepository(repository) {
    const findAllByUserIdSportNamePaginated = (userId, sort, sportName, skip, limit) => repository.findAllByUserIdSportNamePaginated(userId, sportName, sort, skip, limit);
    const findAllByUserIdPaginated = (userId, sort, skip, limit) => repository.findAllByUserIdPaginated(userId, sort, skip, limit);
    const findAllBySportNamePaginated = (sportName, sort,skip, limit) => repository.findAllBySportNamePaginated(sportName,sort, skip, limit);
    const findAllByUserIdSportName = (userId, sportName, sort) => repository.findAllByUserIdSportName(userId, sportName, sort);
    const findAllByUserId = (userId, sort) => repository.findAllByUserId(userId, sort);
    const findAllBySportName = (sportName, sort) => repository.findAllBySportName(sportName,sort);
    const findAllBySportsFacilityId = (sportsFacilityId, sort) => repository.findAllBySportsFacilityId(sportsFacilityId, sort);
    const findById = (id) => repository.findById(id);
    const findAll = (sort) => repository.findAll(sort);
    const findAllPaginated = (sort,skip, limit) => repository.findAllPaginated(sort,skip, limit);
    const add = (sportsField) => repository.add(sportsField);

    return {
        findAllByUserIdSportNamePaginated,
        findAllByUserIdPaginated,
        findAllBySportNamePaginated,
        findAllByUserIdSportName,
        findAllByUserId,
        findAllBySportName,
        findAll,
        findAllPaginated,
        findAllBySportsFacilityId,
        findById,
        add,
        // updateById,
        // deleteById
    };
}