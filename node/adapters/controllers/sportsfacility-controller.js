import addSportsField from "../../application/use-cases/sportsfacility/addsportsfield-by-id.js";
import findAll from "../../application/use-cases/sportsfacility/findall.js";
import findById from "../../application/use-cases/sportsfacility/find-by-id.js";

export default function sportsFacilityController(
    sportsFacilityDbRepositoryInterface,
    sportsFacilityDbRepositoryImpl,
    sportsFieldDbRepositoryInterface,
    sportsFieldDbRepositoryImpl,
    priceListDbRepositoryInterface,
    priceListDbRepositoryImpl,
    userDbRepositoryInterface,
    userDbRepositoryImpl,
    addressDbRepositoryInterface,
    addressDbRepositoryImpl
) {
    const sportsFacilityDbRepository = sportsFacilityDbRepositoryInterface(sportsFacilityDbRepositoryImpl());
    const sportsFieldDbRepository = sportsFieldDbRepositoryInterface(sportsFieldDbRepositoryImpl());
    const priceListDbRepository = priceListDbRepositoryInterface(priceListDbRepositoryImpl());
    const userDbRepository = userDbRepositoryInterface(userDbRepositoryImpl());
    const addressDbRepository = addressDbRepositoryInterface(addressDbRepositoryImpl());

    const getSportsFacility = async ({ request: {
        user,
        body,
        params,
        query
    } }) => {
        let id = params.id
        try {
            const { detail, owner, address, sportsFields } = await findById(id, sportsFacilityDbRepository, sportsFieldDbRepository, priceListDbRepository, userDbRepository, addressDbRepository);
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success retrieved sports facility data",
                data: {
                    id: detail.id,
                    name: detail.name,
                    totalSportsFields: detail.totalSportsFields,
                    phone: detail.phone,
                    address: {
                        id: address?.id ?? null,
                        state: address?.state ?? null,
                        city: address?.city ?? null,
                        streetName: address?.streetName ?? null,
                        streetNumber: address?.streetNumber ?? null,
                        postcode: address?.postcode?? null
                    } ,
                    owner: {
                        id: owner?.id ?? null,
                        username: owner?.username ?? null,
                        password: owner?.password ?? null,
                        email: owner?.email ?? null,
                        firstName: owner?.firstName ?? null,
                        lastName: owner?.lastName ?? null,
                        fiscalCode: owner?.fiscalCode ?? null

                    } ,
                    sportsFields:
                        sportsFields.fieldList.map((val, i) => {
                            return {
                                id: val.id,
                                name: val.name,
                                sport: val.sport,
                                isIndoor: val.isIndoor,
                                priceList: {
                                    id: sportsFields.priceList[i]?.id ?? null,
                                    pricePerHour: sportsFields.priceList[i]?.pricePerHour ?? null,
                                },
                                soccerFieldType: val.soccerFieldType,
                                tennisFieldType: val.tennisFieldType,
                            }
                        })

                }
            }
        } catch (error) {
            throw error
        }

    }
    const getSportsFacilities = async ({ request: {
        user,
        body,
        params,
        query
    } }) => {
        let userId = query.filter_by_owner_id
        let page = query.page
        let limit = query.limit
        let sort = "desc"

        try {

            const { sportsFacilities, sportsFields } = await findAll(userId, sort, page, limit, sportsFacilityDbRepository, sportsFieldDbRepository, priceListDbRepository, userDbRepository, addressDbRepository);
            // const sportsFieldWithPrice = sportsFields.fieldList.map((fieldVal, i) => {
            //     return fieldVal.map((inVal, j) => {
            //         return {
            //             id: inVal.id,
            //             name: inVal.name,
            //             sport: inVal.sport,
            //             isIndoor: inVal.isIndoor,
            //             priceList: inVal.priceListId !== null && inVal.priceListId == sportsFields.priceList[i][j]?.id ? {
            //                 id: sportsFields.priceList[i][j].id,
            //                 pricePerHour: sportsFields.priceList[i][j].pricePerHour,
            //             } : {
            //                 id: null,
            //                 pricePerHour: null,
            //             },
            //             soccerFieldType: inVal.soccerFieldType,
            //             tennisFieldType: inVal.tennisFieldType,
            //         }
            //     })
            // })
            
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success retrieved sports facility data",
                data: sportsFacilities.detail.map((val, i) => {
                    return {
                        id: val.id,
                        name: val.name,
                        totalSportsFields: val.totalSportsFields,
                        phone: val.phone,
                        address: val.addressId !== null && val.addressId == sportsFacilities.address[i]?.id ? {
                            id: sportsFacilities.address[i].id,
                            state: sportsFacilities.address[i].state,
                            city: sportsFacilities.address[i].city,
                            streetName: sportsFacilities.address[i].streetName,
                            streetNumber: sportsFacilities.address[i].streetNumber,
                            postcode: sportsFacilities.address[i].postcode
                        } : {
                            id: null,
                            state: null,
                            city: null,
                            streetName: null,
                            streetNumber: null,
                            postcode: null
                        },
                        owner: val.userId !== null && val.userId == sportsFacilities.owner[i]?.id ? {
                            id: sportsFacilities.owner[i].id,
                            username: sportsFacilities.owner[i].username,
                            password: sportsFacilities.owner[i].password,
                            email: sportsFacilities.owner[i].email,
                            firstName: sportsFacilities.owner[i].firstName,
                            lastName: sportsFacilities.owner[i].lastName,
                            fiscalCode: sportsFacilities.owner[i].fiscalCode

                        } : {
                            id: null,
                            username: null,
                            password: null,
                            email: null,
                            firstName: null,
                            lastName: null,
                            fiscalCode: null
                        },
                        // sportsFields: sportsFieldWithPrice[i]
                    }
                }),
            }
        } catch (error) {
            throw error
        }
    }

    const postSportsField = async ({ request: {
        user,
        body,
        params,
        query
    } }) => {
        let id = params.id
        let {
            name,
            sport,
            isIndoor,
            priceList: { pricePerHour },
        } = body
        try {

            const { sportsFacility, sportsField, price, owner } = await addSportsField(id, {
                name, sport, isIndoor, pricePerHour
            }, sportsFacilityDbRepository, priceListDbRepository, sportsFieldDbRepository, userDbRepository, addressDbRepository)
            // return result
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success retrieved sports facility data",
                data: {
                    id: sportsField.id,
                    name: sportsField.name,
                    sport: sportsField.sport,
                    isIndoor: sportsField.isIndoor,
                    priceList: {
                        pricePerHour: price.pricePerHour
                    },
                    soccerFieldType: sportsField.soccerFieldType,
                    tennisFieldType: sportsField.tennisFieldType,
                    userId: owner.user.userId,
                    sportsFacilityId: sportsField.sportsFacilityId,
                    owner: {
                        id: owner.user?.userId ?? null,
                        username: owner.user?.username ?? null,
                        address: {
                            id: owner.address?.id ?? null,
                            state: owner.address?.state ?? null,
                            city: owner.address?.city ?? null,
                            streetName: owner.address?.streetName ?? null,
                            streetNumber: owner.address?.streetNumber ?? null,
                            postcode: owner.address?.postcode ?? null,

                        },
                        email: owner.user?.email ?? null,
                        firstName: owner.user?.firstName ?? null,
                        lastName: owner.user?.lastName ?? null,
                        fiscalCode: owner.user?.fiscalCode ?? null,
                    }
                }
            };
        } catch (error) {
            throw error
        }

    }

    return {
        getSportsFacility,
        getSportsFacilities,
        postSportsField
    }
}