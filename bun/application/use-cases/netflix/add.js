import show from "../../../src/entities/show";

export default function add({
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

    console.log({
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


    const newShow = show({
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
    return showRepository.add(newShow);
}