export default async function findAllPaging(search, page, limit, showRepository) {
    const skip = (page - 1) * limit;
    const shows = await showRepository.findAllPaging(search, skip, limit);
    if(!shows.length) throw new ResponseError(404, "Show is not found")
    return shows.map((e) => ({
        ...e,
        date_added: new Intl.DateTimeFormat('en-CA').format(new Date(e.date_added))
    }))
}