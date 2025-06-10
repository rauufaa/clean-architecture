export default function findById(showId, showRepository){
    return showRepository.findById(showId);
}