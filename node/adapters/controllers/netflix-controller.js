import add from "../../application/use-cases/netflix/add";
import deleteById from "../../application/use-cases/netflix/delete-by-id";
import findAllPaging from "../../application/use-cases/netflix/find-all-paging";
import findById from "../../application/use-cases/netflix/find-by-id";
import updateById from "../../application/use-cases/netflix/update-by-id";


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
            throw new Error(error);
        }

    }

    const getPagingShow = async (query) => {
        try {
            const shows = await findAllPaging(query.search, query.page, query.limit, dbRepository);
            return shows.map((e) => ({
                ...e,
                date_added: new Intl.DateTimeFormat('en-CA').format(new Date(e.date_added))
            }))
        } catch (error) {
            throw new Error(error);
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
            throw new Error(error);
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
            throw new Error(error);
        }


    }


    const deleteShow = async (params) => {
        try {
            const shows = await deleteById(params.showId, dbRepository);
            // if (!shows.rows[0]) throw new ResponseError(404, "User not found");
            return shows
        } catch (error) {
            throw new Error(error);
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

