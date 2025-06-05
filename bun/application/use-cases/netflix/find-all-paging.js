export default async function findAllPaging(search, page, limit, showRepository) {
    const skip = (page - 1) * limit;
    return showRepository.findAllPaging(search, skip, limit);
}