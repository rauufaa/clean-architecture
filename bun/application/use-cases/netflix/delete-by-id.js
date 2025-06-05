export default async function deleteById(showId, showRepository){
    return showRepository.deleteById(showId);
}