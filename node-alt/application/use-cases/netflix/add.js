// import show from "../../../src/entities/show.js";
import show from "../../../src/entities/show.js";
import { ResponseError } from "../../../src/exceptions/response-error.js";

export default async function add({
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

    const show = await showRepository.add(newShow);
    if(!show) throw new ResponseError(404, "Show is not found")
    return show
}