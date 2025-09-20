export default function showRepository(repository) {
    const findAllPaging = (search, page, limit) => repository.findAllPaging(search, page, limit);
    const findById = (showId) => repository.findById(showId);
    const add = (show) => repository.add(show);
    const updateById = (id, product) => repository.updateById(id, product);
    const deleteById = (id) => repository.deleteById(id);

    return {
        findAllPaging,
        findById,
        add,
        updateById,
        deleteById
    };
}

export const mega = () => {
    
}