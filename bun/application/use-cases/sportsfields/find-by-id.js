import { DomainError } from "../../../src/domain/error/domain-error.js";

export default async function findById(id, repository) {
    try {
        const sportsField = await repository.findById(id);
        if (!sportsField) throw new DomainError(404, "SPORTSFIELD_NOT_FOUND", "Not found", "Sports field not found")
        return sportsField
    } catch (error) {
        throw error
    }

}