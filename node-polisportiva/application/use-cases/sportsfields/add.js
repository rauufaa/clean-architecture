import SportsField from "../../../src/entities/sportsfield.js";

export default async function add({
    sportsFacilityId,
    name,
    sport,
    isIndoor,
    ownerId = null,
    priceListId,
    soccerFieldType = null,
    tennisFieldType = null
}, sportsFieldDbRepository) {
    try {
        const newSportsField = new SportsField({
            sportsFacilityId,
            name,
            sport,
            isIndoor,
            ownerId,
            priceListId,
            soccerFieldType,
            tennisFieldType
        })

        const result = await sportsFieldDbRepository.add(newSportsField);
        return result
    } catch (error) {
        throw error
    }


}