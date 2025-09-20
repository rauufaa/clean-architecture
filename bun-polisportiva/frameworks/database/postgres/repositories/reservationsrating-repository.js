import prisma from "../connection"

export default function reservationRatingRepository() {


    const findByReservationId = (reservationId, sort) => {
        const results = prisma.reservationRating.findFirst({
            orderBy: {
                id: sort
            },
            where: {
                reservationId: reservationId
            },
        })

        return results
    }

    const findAllByReservationIdPaginated = ( reservationId, sort, skip, limit) => {
        const results = prisma.reservationRating.findMany({
            skip: skip,
            take: limit,
            orderBy: {
                id: sort
            },
            where: {
                reservationId: reservationId
            },
        })

        return results
    }

    const findAllByReservationId = (reservationId, sort) => {
        const results = prisma.reservationRating.findMany({
            orderBy: {
                id: sort
            },
            where: {
                reservationId: reservationId
            },
        })

        return results
    }

    const findAvgRatingsByReservationId = (reservationId) => {
        const results = prisma.reservationRating.aggregate({
            _avg: {
                rating: true
            },
            where: {
                reservationId: reservationId
            },
        })

        return results
    }

    const findAllPaginated = (sort, skip, limit) => {

        const results = prisma.reservationRating.findMany({
            skip: skip,
            take: limit,
            orderBy: {
                id: sort
            }
        })
        return results
    }

    const findAll = (sort) => {
        const results = prisma.reservationRating.findMany({
            orderBy: {
                id: sort
            }
        })
        return results
    }

    const add = (rating) => {
        const results = prisma.reservationRating.create({
            data: {
                rating: rating.getRating(),
                description: rating.getDescription(),
                reservationId: rating.getReservationId(),
            }
        })
        return results

    }

    return {
        findByReservationId,
        findAllByReservationIdPaginated,
        findAvgRatingsByReservationId,
        findAllByReservationId,
        findAllPaginated,
        findAll,
        add,
    }
}