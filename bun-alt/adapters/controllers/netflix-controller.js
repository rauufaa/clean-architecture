import add from "../../application/use-cases/netflix/add";
import deleteById from "../../application/use-cases/netflix/delete-by-id";
import findAllPaging from "../../application/use-cases/netflix/find-all-paging";
import findById from "../../application/use-cases/netflix/find-by-id";
import updateById from "../../application/use-cases/netflix/update-by-id";
import { ResponseError } from "../../src/exceptions/response-error";


export default function netflixControllerFastify(
    showDbRepository,
    showDbRepositoryImpl
) {
    const dbRepository = showDbRepository(showDbRepositoryImpl());

    const getShow = async (params) => {
        try {
            const shows = await findById(params.showId, dbRepository);
            return shows
        } catch (error) {
            throw error;
        }

    }

    const getPagingShow = async (query) => {
        try {
            const shows = await findAllPaging(query.search, query.page, query.limit, dbRepository);
            return shows;
        } catch (error) {
            throw error;
        }

    }

    const postShow = async (body) => {
        const { type,
            title,
            director,
            castMembers,
            country,
            dateAdded,
            releaseYear,
            rating,
            duration,
            listedIn,
            description } = body

        try {
            const shows = await add({
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
            }, dbRepository);
            return shows
        } catch (error) {
            throw error;
        }


    }

    const putShow = async (params, body) => {
        const { type,
            title,
            director,
            castMembers,
            country,
            dateAdded,
            releaseYear,
            rating,
            duration,
            listedIn,
            description } = body

        try {
            const shows = await updateById({
                showId: params.showId,
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
            }, dbRepository);
            return shows
        } catch (error) {
            throw error;
        }


    }


    const deleteShow = async (params) => {
        try {
            const shows = await deleteById(params.showId, dbRepository);
            return shows
        } catch (error) {
            throw error;
        }

    }

    return {
        getShow,
        getPagingShow,
        postShow,
        putShow,
        deleteShow
    }
}

