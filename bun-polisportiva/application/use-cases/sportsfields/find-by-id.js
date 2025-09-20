import { ResponseError } from "../../../src/exceptions/response-error";

export default async function findById(id, repository) {
    try {
        const sportsField = await repository.findById(id);
        if (!sportsField) throw new ResponseError(404, "SPORTSFIELD_NOT_FOUND", "Not found", "Sports field not found")
        return sportsField
    } catch (error) {
        throw error
    }

}