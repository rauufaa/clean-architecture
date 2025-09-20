export default function addressRepository(repository) {
    const findById = (id) => repository.findById(id);
    const add = (address) => repository.add(address);
    // const updateById = (id, sportsField) => repository.updateById(id, sportsField);
    // const deleteById = (id) => repository.deleteById(id);

    return {
        findById,
        add,
        // updateById,
        // deleteById
    };
}