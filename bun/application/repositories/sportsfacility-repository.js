export default function sportsFacilityRepository(repository) {
    
    const findAllByUserIdPaginated = (userId, sort, skip, limit) => repository.findAllByUserIdPaginated(userId, sort, skip, limit);
    const findAllByUserId = (userId,sort) => repository.findAllByUserId(userId,sort);
    const findAllPaginated = (sort, skip, limit) => repository.findAllPaginated(sort,skip, limit);
    const findAll = (sort) => repository.findAll(sort,);
    
    const findById = (id) => repository.findById(id);
    

    return {
        findAllByUserId, 
        findAllByUserIdPaginated,
        findAllPaginated,
        findAll,
        findById,
    };
}