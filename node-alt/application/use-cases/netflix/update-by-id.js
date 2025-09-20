import show from "../../../src/entities/show.js";
import { ResponseError } from "../../../src/exceptions/response-error.js";

export default async function updateById({
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
    const show = await showRepository.updateById(newShow);
    if(!show) throw new ResponseError(404, "Show is not found")
    return show
}