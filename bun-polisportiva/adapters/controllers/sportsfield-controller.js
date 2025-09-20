import findAll from "../../application/use-cases/sportsfields/findall";
import findById from "../../application/use-cases/sportsfields/find-by-id";

export default function sportsFieldsController(
    sportsFieldsDBRepositoryInterface,
    sportsFieldsDBRepositoryImpl
) {
    const sportsFieldDbRepository = sportsFieldsDBRepositoryInterface(sportsFieldsDBRepositoryImpl());

    const getSportsField = async ({ request: {
        user,
        body,
        params,
        query
    } }) => {
        let id = params.id
        try {
            const sportsField = await findById(id, sportsFieldDbRepository);
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success retrieved user data",
                data: sportsField,
            }
        } catch (error) {
            throw error;
        }

    }
    const getSportsFields = async ({ request: {
        user,
        body,
        params,
        query
    } }) => {
        let ownerId = query.filter_by_owner_id
        let sportName = query.filter_by_sport
        let page = query.page
        let limit = query.limit
        let sort = "asc"

        try {
            const {sportsFields} = await findAll(ownerId, sportName, sort, page, limit, sportsFieldDbRepository);
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success get sports fields data",
                data: sportsFields,
            }
        } catch (error) {
            throw error;
        }

    }

    return {
        getSportsField,
        getSportsFields
    }
}