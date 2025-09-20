import prisma from "../connection.js"

export default function reservationRepository() {

    const findAllPaginated = (sort, skip, limit) => {
        const result = prisma.reservation.findMany({
            skip: skip,
            take: limit,
            orderBy: {
                id: sort
            }
        })
        return result
    }

    const findAll = (sort) => {
        const result = prisma.reservation.findMany({
            orderBy: {
                id: sort
            }
        })
        return result
    }

    const findAllByUserIdPaginated = (userId, sort, skip, limit) => {
        const result = prisma.reservation.findMany({
            skip: skip,
            take: limit,
            where: {
                userId: userId
            },
            orderBy: {
                id: sort
            }
        })
        return result
    }

    const findAllByUserId = (userId, sort) => {
        const result = prisma.reservation.findMany({
            where: {
                userId: userId
            },
            orderBy: {
                id: sort
            }
        })
        return result
    }

    const findById = (id) => {
        const results = prisma.reservation.findUnique({
            where: {
                id: id
            },
        })

        return results
    }

    const add = (reservation) => {
        const result = prisma.reservation.create({
            data: {
                startDate: reservation.getStartDate(),
                endDate: reservation.getEndDate(),
                createdAt: reservation.getCreatedAt(),
                state: reservation.getState(),
                price: reservation.getPrice(),
                userId: reservation.getUserId(),
                sportsFieldId: reservation.getSportsFieldId(),
            }
        })

        return result
    }

    const updateStateById = (id, state) => {
        const result = prisma.reservation.update({
            data: {
                state: state
            },
            where: {
                id: id
            }
        })

        return result
    }

    

    return {
        findAllByUserId, 
        findAllByUserIdPaginated,
        findAllPaginated,
        findAll,
        findById,
        add,
        updateStateById
    };
}