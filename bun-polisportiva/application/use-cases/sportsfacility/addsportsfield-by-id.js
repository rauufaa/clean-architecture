import Price from "../../../src/entities/price"
import SportsField from "../../../src/entities/sportsfield"

export default async function addSportsFieldById(id, {
    name,
    sport,
    isIndoor,
    pricePerHour,
}, sportsFacilityDbRepository, priceListDbRepository, sportsFieldDbRepository, userDbRepository, addressDbRepository) {

    try {
        const facilityDetail = await sportsFacilityDbRepository.findById(id)
        if (!facilityDetail) throw new ResponseError(404, "SPORTSFACILITY_NOT_FOUND", "Not found", "Sports facility not found")

        const newPrice = new Price({
            pricePerHour: pricePerHour
        })

        const priceDetailResult = await priceListDbRepository.add(newPrice)
        // if (!priceDetailResult) throw new ResponseError(404, "Show is not found")

        const newSportsField = new SportsField({
            sportsFacilityId: facilityDetail.id,
            name,
            sport,
            isIndoor,
            userId: facilityDetail.userId,
            priceListId: priceDetail.id,
            soccerFieldType,
            tennisFieldType
        })
        const fieldDetailResult = await sportsFieldDbRepository.add(newSportsField)
        // if (!fieldDetailResult) throw new ResponseError(404, "Show is not found")

        const userDetail = facilityDetail.userId !== null
            ? await userDbRepository.findById(facilityDetail.userId)
            : null;
        const addressDetail = userDetail.addressId !== null
            ? await addressDbRepository.findById(userDetail.addressId)
            : null;
        // if (!pr) throw new ResponseError(404, "Show is not found")
        return {
            sportsFacility: facilityDetail,
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