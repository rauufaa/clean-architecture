import Price from "../../../src/entities/price.js"
import SportsField from "../../../src/entities/sportsfield.js"
import { DomainError } from "../../../src/domain/error/domain-error.js"

export default async function addSportsFieldById(id, {
    name,
    sport,
    isIndoor,
    pricePerHour,
}, sportsFacilityDbRepository, priceListDbRepository, sportsFieldDbRepository, userDbRepository, addressDbRepository) {

    try {
        const facilityDetailResult = await sportsFacilityDbRepository.findById(id)
        if (!facilityDetailResult) throw new DomainError(404, "SPORTSFACILITY_NOT_FOUND", "Not found", "Sports facility not found")

        const newPrice = new Price({
            pricePerHour: pricePerHour
        })

        const priceDetailResult = await priceListDbRepository.add(newPrice)
        // if (!priceDetailResult) throw new ResponseError(404, "Show is not found")

        const newSportsField = new SportsField({
            sportsFacilityId: facilityDetailResult.id,
            name,
            sport,
            isIndoor,
            userId: facilityDetailResult.userId,
            priceListId: priceDetailResult.id,
            soccerFieldType: "",
            tennisFieldType: ""
        })
        const fieldDetailResult = await sportsFieldDbRepository.add(newSportsField)
        // if (!fieldDetailResult) throw new ResponseError(404, "Show is not found")

        const userDetail = facilityDetailResult.userId !== null
            ? await userDbRepository.findById(facilityDetailResult.userId)
            : null;
        const addressDetail = userDetail.addressId !== null
            ? await addressDbRepository.findById(userDetail.addressId)
            : null;
        // if (!pr) throw new ResponseError(404, "Show is not found")
        return {
            sportsFacility: facilityDetailResult,
            sportsField: fieldDetailResult,
            price: priceDetailResult,
            owner: {
                user: userDetail,
                address: addressDetail
            }
        }
    } catch (error) {
        throw error
    }

}