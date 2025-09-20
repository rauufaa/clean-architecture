import addRating from "../../application/use-cases/reservation/add-rating.js";
import findRatingById from "../../application/use-cases/reservation/findrating-by-id.js";
import add from "../../application/use-cases/reservation/add.js";
import findAll from "../../application/use-cases/reservation/findall.js";
import updateStateById from "../../application/use-cases/reservation/updatestate-by-id.js";
import findById from "../../application/use-cases/reservation/find-by-id.js";

export default function reservationController(
    reservationDbRepositoryInterface,
    reservationDbRepositoryImpl,
    reservationsRatingDbRepositoryInterface,
    reservationsRatingDbRepositoryImpl,
    userDbRepositoryInterface,
    userDbRepositoryImpl,
    sportsFieldDbRepositoryInterface,
    sportsFieldDbRepositoryImpl,
    addressDbRepositoryInterface,
    addressDbRepositoryImpl
) {
    const reservationDbRepository = reservationDbRepositoryInterface(reservationDbRepositoryImpl());
    const reservationsRatingDbRepository = reservationsRatingDbRepositoryInterface(reservationsRatingDbRepositoryImpl());
    const sportsFieldDbRepository = sportsFieldDbRepositoryInterface(sportsFieldDbRepositoryImpl());
    const userDbRepository = userDbRepositoryInterface(userDbRepositoryImpl());
    const addressDbRepository = addressDbRepositoryInterface(addressDbRepositoryImpl());

    const getReservation = async ({ request: {
        user,
        body,
        params,
        query
    } }) => {
        let id = params.id
        try {
            const { detail, owner, sportsField } = await findById(id, reservationDbRepository, sportsFieldDbRepository, userDbRepository, addressDbRepository);
            
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success GET reservation data",
                data: {
                    id: detail.id,
                    dateRange: {
                        startDate: detail.startDate,
                        endDate: detail.endDate,
                    },
                    state: detail.state,
                    price: detail.price,
                    createdAt: detail.createdAt,

                    owner: detail.userId !== null ? {
                        id: owner.user.id,
                        username: owner.user.username,
                        address: owner.user.addressId !== null ? {
                            id: owner.address.id,
                            state: owner.address.state,
                            city: owner.address.city,
                            streetName: owner.address.streetName,
                            streetNumber: owner.address.streetNumber,
                            postcode: owner.address.postcode,

                        } : {
                            id: null,
                            state: null,
                            city: null,
                            streetName: null,
                            streetNumber: null,
                            postcode: null,
                        },
                        email: owner.user.email,
                        firstName: owner.user.firstName,
                        lastName: owner.user.lastName,
                        fiscalCode: owner.user.fiscalCode,

                    } : {
                        id: null,
                        username: null,
                        address: {
                            id: null,
                            state: null,
                            city: null,
                            streetName: null,
                            streetNumber: null,
                            postcode: null,
                        },
                        email: null,
                        firstName: null,
                        lastName: null,
                        fiscalCode: null,
                    },
                    sportsField: {
                        id: sportsField.detail.id,
                        name: sportsField.detail.name,
                        sport: sportsField.detail.sport,
                        isIndoor: sportsField.detail.isIndoor,
                        soccerFieldType: sportsField.detail.soccerFieldType,
                        tennisFieldType: sportsField.detail.tennisFieldType,
                        owner: sportsField.detail.userId !== null ? {
                            id: sportsField.owner.user.id,
                            username: sportsField.owner.user.username,
                            address: sportsField.owner.user.addressId !== null ? {
                                id: sportsField.owner.address.id,
                                state: sportsField.owner.address.state,
                                city: sportsField.owner.address.city,
                                streetName: sportsField.owner.address.streetName,
                                streetNumber: sportsField.owner.address.streetNumber,
                                postcode: sportsField.owner.address.postcode,

                            } : {
                                id: null,
                                state: null,
                                city: null,
                                streetName: null,
                                streetNumber: null,
                                postcode: null,
                            },
                            email: sportsField.owner.user.email,
                            firstName: sportsField.owner.user.firstName,
                            lastName: sportsField.owner.user.lastName,
                            fiscalCode: sportsField.owner.user.fiscalCode,

                        } : {
                            id: null,
                            username: null,
                            address: {
                                id: null,
                                state: null,
                                city: null,
                                streetName: null,
                                streetNumber: null,
                                postcode: null,
                            },
                            email: null,
                            firstName: null,
                            lastName: null,
                            fiscalCode: null,
                        },
                    }
                }
            }
        } catch (error) {
            throw error
        }

    }
    const getReservations = async ({ request: {
        user,
        body,
        params,
        query
    } }) => {
        let sort = query.sort
        let page = query.page
        let limit = query.limit

        try {
            const result = await findAll(sort, page, limit, reservationDbRepository);
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success retrieved user data",
                data: result
            }
        } catch (error) {
            throw error
        }

    }

    const postReservation = async ({ request: {
        user,
        body,
        params,
        query
    } }) => {
    
        let userId = body.ownerId
        let sportsFieldId = body.sportsFieldId
        let dateRange = {
            startDate: body.dateRange.startDate,
            endDate: body.dateRange.endDate
        }

        try {
            const { reservation, owner, sportsField } = await add({
                sportsFieldId,
                userId,
                dateRange
            }, reservationDbRepository, userDbRepository, sportsFieldDbRepository, addressDbRepository)
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success add reservation data",
                data: {
                    id: reservation.id,
                    dateRange: {
                        startDate: reservation.startDate,
                        endDate: reservation.endDate,
                    },
                    state: reservation.state,
                    price: reservation.price,
                    createdAt: reservation.createdAt,

                    owner: reservation.userId !== null ? {
                        id: owner.user.id,
                        username: owner.user.username,
                        address: owner.user.addressId !== null ? {
                            id: owner.address.id,
                            state: owner.address.state,
                            city: owner.address.city,
                            streetName: owner.address.streetName,
                            streetNumber: owner.address.streetNumber,
                            postcode: owner.address.postcode,

                        } : {
                            id: null,
                            state: null,
                            city: null,
                            streetName: null,
                            streetNumber: null,
                            postcode: null,
                        },
                        email: owner.user.email,
                        firstName: owner.user.firstName,
                        lastName: owner.user.lastName,
                        fiscalCode: owner.user.fiscalCode,

                    } : {
                        id: null,
                        username: null,
                        address: {
                            id: null,
                            state: null,
                            city: null,
                            streetName: null,
                            streetNumber: null,
                            postcode: null,
                        },
                        email: null,
                        firstName: null,
                        lastName: null,
                        fiscalCode: null,
                    },
                    sportsField: {
                        id: sportsField.detail.id,
                        name: sportsField.detail.name,
                        sport: sportsField.detail.sport,
                        isIndoor: sportsField.detail.isIndoor,
                        soccerFieldType: sportsField.detail.soccerFieldType,
                        tennisFieldType: sportsField.detail.tennisFieldType,
                        owner: sportsField.detail.userId !== null ? {
                            id: sportsField.owner.user.id,
                            username: sportsField.owner.user.username,
                            address: sportsField.owner.user.addressId !== null ? {
                                id: sportsField.owner.address.id,
                                state: sportsField.owner.address.state,
                                city: sportsField.owner.address.city,
                                streetName: sportsField.owner.address.streetName,
                                streetNumber: sportsField.owner.address.streetNumber,
                                postcode: sportsField.owner.address.postcode,

                            } : {
                                id: null,
                                state: null,
                                city: null,
                                streetName: null,
                                streetNumber: null,
                                postcode: null,
                            },
                            email: sportsField.owner.user.email,
                            firstName: sportsField.owner.user.firstName,
                            lastName: sportsField.owner.user.lastName,
                            fiscalCode: sportsField.owner.user.fiscalCode,

                        } : {
                            id: null,
                            username: null,
                            address: {
                                id: null,
                                state: null,
                                city: null,
                                streetName: null,
                                streetNumber: null,
                                postcode: null,
                            },
                            email: null,
                            firstName: null,
                            lastName: null,
                            fiscalCode: null,
                        },
                    }
                }

            };

        } catch (error) {
            throw error
        }

    }

    const putReservationStatus = async ({ request: {
        user,
        body,
        params,
        query
    } }) => {

        let state = body.state
        let id = params.id
        try {
            const { reservation, owner, sportsField } = await updateStateById(id, state, reservationDbRepository, userDbRepository, sportsFieldDbRepository, addressDbRepository);
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success add reservation data",
                data: {
                    id: reservation.id,
                    dateRange: {
                        startDate: reservation.startDate,
                        endDate: reservation.endDate,
                    },
                    state: reservation.state,
                    price: reservation.price,
                    createdAt: reservation.createdAt,

                    owner: reservation.userId !== null ? {
                        id: owner.user.id,
                        username: owner.user.username,
                        address: owner.user.addressId !== null ? {
                            id: owner.address.id,
                            state: owner.address.state,
                            city: owner.address.city,
                            streetName: owner.address.streetName,
                            streetNumber: owner.address.streetNumber,
                            postcode: owner.address.postcode,

                        } : {
                            id: null,
                            state: null,
                            city: null,
                            streetName: null,
                            streetNumber: null,
                            postcode: null,
                        },
                        email: owner.user.email,
                        firstName: owner.user.firstName,
                        lastName: owner.user.lastName,
                        fiscalCode: owner.user.fiscalCode,

                    } : {
                        id: null,
                        username: null,
                        address: {
                            id: null,
                            state: null,
                            city: null,
                            streetName: null,
                            streetNumber: null,
                            postcode: null,
                        },
                        email: null,
                        firstName: null,
                        lastName: null,
                        fiscalCode: null,
                    },
                    sportsField: {
                        id: sportsField.detail.id,
                        name: sportsField.detail.name,
                        sport: sportsField.detail.sport,
                        isIndoor: sportsField.detail.isIndoor,
                        soccerFieldType: sportsField.detail.soccerFieldType,
                        tennisFieldType: sportsField.detail.tennisFieldType,
                        owner: sportsField.detail.userId !== null ? {
                            id: sportsField.owner.user.id,
                            username: sportsField.owner.user.username,
                            address: sportsField.owner.user.addressId !== null ? {
                                id: sportsField.owner.address.id,
                                state: sportsField.owner.address.state,
                                city: sportsField.owner.address.city,
                                streetName: sportsField.owner.address.streetName,
                                streetNumber: sportsField.owner.address.streetNumber,
                                postcode: sportsField.owner.address.postcode,

                            } : {
                                id: null,
                                state: null,
                                city: null,
                                streetName: null,
                                streetNumber: null,
                                postcode: null,
                            },
                            email: sportsField.owner.user.email,
                            firstName: sportsField.owner.user.firstName,
                            lastName: sportsField.owner.user.lastName,
                            fiscalCode: sportsField.owner.user.fiscalCode,

                        } : {
                            id: null,
                            username: null,
                            address: {
                                id: null,
                                state: null,
                                city: null,
                                streetName: null,
                                streetNumber: null,
                                postcode: null,
                            },
                            email: null,
                            firstName: null,
                            lastName: null,
                            fiscalCode: null,
                        },
                    }
                }

            }
        } catch (error) {
            throw error
        }

    }

    const getReservationRating = async ({ request: {
        user,
        body,
        params,
        query
    } }) => {

        let id = params.id

        try {
            const { reservation, rating } = await findRatingById(id, reservationDbRepository, reservationsRatingDbRepository);
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success add reservation data",
                data: {
                    reservation: reservation,
                    rating: rating
                }
            }
        } catch (error) {
            throw error
        }

    }

    const postReservationRating = async ({ request: {
        user,
        body,
        params,
        query
    } }) => {

        let id = params.id

        const ratingVal = body.rating
        let description = body.description
        
        try {
            const { reservation, rating } = await addRating(id, { rating: ratingVal, description }, reservationDbRepository, reservationsRatingDbRepository);
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success add reservation data",
                data: {
                    reservation: reservation,
                    rating: rating
                }
            }
        } catch (error) {
            throw error
        }

    }

    return {
        getReservation,
        getReservations,
        postReservation,
        putReservationStatus,
        addRating,
        getReservationRating,
        postReservationRating
    }
}