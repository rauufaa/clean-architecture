import { DomainError } from "../../../src/domain/error/domain-error.js";


export default async function findById(id, sportsFacilityDbRepository, sportsFieldDbRepository, priceListDbRepository, userDbRepository, addressDbRepository) {
    try {
        const sportsFacility = await sportsFacilityDbRepository.findById(id);
        if (!sportsFacility) throw new DomainError(404, "SPORTSFACILITY_NOT_FOUND", "Not found", "Sports facility not found")

        const facilityAddress = sportsFacility.addressId !== null
            ? await addressDbRepository.findById(sportsFacility.addressId)
            : null;

        const userOwner = sportsFacility.userId !== null
            ? await userDbRepository.findById(sportsFacility.userId)
            : null;

        const sportsFields = await sportsFieldDbRepository.findAllBySportsFacilityId(sportsFacility.id);

        const sportsFieldsPrice = await Promise.all(
            sportsFields.map(val => val.priceListId !== null ? priceListDbRepository.findById(val.priceListId) : null)
        )

        return {

            detail: sportsFacility,
            address: facilityAddress,
            owner: userOwner,
            sportsFields: {
                fieldList: sportsFields,
                priceList: sportsFieldsPrice
            }


        }
    } catch (error) {
        throw error
    }

}