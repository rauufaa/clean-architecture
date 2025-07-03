export default async function findById(showId, showRepository){
    const show = await showRepository.findById(showId);
    if(!show) throw new ResponseError(404, "Show is not found")
    return show
}