export default async function findById(showId, showRepository){
    return showRepository.findById(showId);
}