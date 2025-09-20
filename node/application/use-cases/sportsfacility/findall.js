
export default async function findAll(userId, sort = "asc", page, limit, sportsFacilityDbRepository, sportsFieldDbRepository, priceListDbRepository, userDbRepository, addressDbRepository) {

    const skip = page && limit ? (page - 1) * limit : null;

    try {
        const sportsFacilitiesResult = skip !== null
            ? (userId !== null
                ? await sportsFacilityDbRepository.findAllByUserIdPaginated(userId, sort, skip, limit)
                : await sportsFacilityDbRepository.findAllPaginated(sort, skip, limit))
            : (userId !== null
                ? await sportsFacilityDbRepository.findAllByUserId(userId, sort)
                : await sportsFacilityDbRepository.findAll(sort))

        // Fetch related data in parallel
        const facilityAddressesResult = await Promise.all(
            sportsFacilitiesResult.map(val => val.addressId !== null ? addressDbRepository.findById(val.addressId) : null)
        );


        const facilityOwnersResult = await Promise.all(
            sportsFacilitiesResult.map(val => val.userId !== null ? userDbRepository.findById(val.userId) : null)
        );

        // const facilityFieldsResult = await Promise.all(
        //     sportsFacilitiesResult.map(val => sportsFieldDbRepository.findAllBySportsFacilityId(val.id, "asc"))
        // );

        // const priceListsResult = await Promise.all(
        //     facilityFieldsResult.map(async fields =>
        //         await Promise.all(fields.map(field =>
        //             field?.priceListId !== null ? priceListDbRepository.findById(field.priceListId) : null
        //         ))
        //     )
        // );

        return {

            sportsFacilities: {
                detail: sportsFacilitiesResult,
                address: facilityAddressesResult,
                owner: facilityOwnersResult,
            },
            sportsFields: null 
            // sportsFields: {
            //     fieldList: facilityFieldsResult,
            //     priceList: priceListsResult
            // }
        };
    } catch (error) {
        throw error
    }


}