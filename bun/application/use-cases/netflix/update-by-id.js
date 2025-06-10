import show from "../../../src/entities/show";

export default function updateById({
    showId,
    type,
    title,
    director,
    castMembers,
    country,
    dateAdded,
    releaseYear,
    rating,
    duration,
    listedIn,
    description
}, showRepository) {


    const newShow = show({
        showId,
        type,
        title,
        director,
        castMembers,
        country,
        dateAdded,
        releaseYear,
        rating,
        duration,
        listedIn,
        description
    })
    return showRepository.updateById(newShow);
}