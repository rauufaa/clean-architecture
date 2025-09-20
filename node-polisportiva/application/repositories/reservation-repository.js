export default function reservationRepository(repository) {
    const findAllPaginated = (sort, skip, limit) => repository.findAllPaginated(sort, skip, limit);
    const findAll = (sort) => repository.findAll(sort);
    const findAllByUserIdPaginated = ( userId,sort, skip, limit) => repository.findAllByUserIdPaginated( userId,sort, skip, limit);
    const findAllByUserId = (userId,sort) => repository.findAllByUserId( userId, sort);
    const findById = (id) => repository.findById(id);
    const add = (reservation) => repository.add(reservation);
    const updateStateById = (id) => repository.updateStateById(id);
    

    return {
        findAllByUserId, 
        findAllByUserIdPaginated,
        findAllPaginated,
        findAll,
        findById,
        add,
        updateStateById
    };
}