export default function priceListRepository(repository) {
    const findById = (id) => repository.findById(id);
    const add = (price) => repository.add(price);
    
    return {
        findById,
        add,
    };
}