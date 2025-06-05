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
        const shows = await findById(params.showId, dbRepository);
        // if (!shows.rows[0]) throw new ResponseError(404, "User not found");
        return shows
    }

    const getPagingShow = async (query) => {
        const shows = await findAllPaging(query.search, query.page, query.limit, dbRepository);
        // if (!shows.rows[0]) throw new ResponseError(404, "User not found");
        return shows.map((e)=>({
            ...e,
            date_added: new Intl.DateTimeFormat('en-CA').format(new Date(e.date_added))
        }))
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
        // if (!shows.rows[0]) throw new ResponseError(404, "User not found");
        return shows
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
        // if (!shows.rows[0]) throw new ResponseError(404, "User not found");
        return shows
    }


    const deleteShow = async (params) => {
        const shows = await deleteById(params.showId, dbRepository);
        // if (!shows.rows[0]) throw new ResponseError(404, "User not found");
        return shows
    }

    return {
        getShow,
        getPagingShow,
        postShow,
        putShow,
        deleteShow
    }
}

class showController {
    constructor() { }

    async getshow(req, res, next) {
        try {
            const result = await showsService.get(req.params.code);
            res.status(200).json({
                status: 'OK',
                data: result
            })
        } catch (error) {
            next(error)
        }
    }

    async postAddNewshow(req, res, next) {
        try {
            const result = await showsService.post(req.body);
            res.status(200).json({
                status: 'OK',
                message: 'show added successfully',
                data: result
            })
        } catch (error) {
            next(error)
        }
    }

    async putUpdateshow(req, res, next) {
        try {
            const result = await showsService.put(req.body, req.params.code);
            res.status(200).json({
                status: 'OK',
                message: 'show updated successfully',
                data: result
            })
        } catch (error) {
            next(error)
        }
    }

    async patchUpdateshow(req, res, next) {
        try {
            const result = await showsService.patch(req.body, req.params.code);
            res.status(200).json({
                status: 'OK',
                message: 'show partially updated successfully',
                data: result
            })
        } catch (error) {
            next(error)
        }
    }

    async removeshow(req, res, next) {
        try {
            await showsService.remove(req.params.code);
            res.status(200).json({
                status: 'OK',
                message: 'show deleted successfully'
            });
        } catch (error) {
            next(error)
        }
    }
}