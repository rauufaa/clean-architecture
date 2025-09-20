import prisma from "../connection"

export default function sportsFacilityRepository() {


    const findAllByUserIdPaginated = (userId, sort, skip, limit) => {
        const results = prisma.sportsFacility.findMany({
            skip: skip,
            take: limit,
            orderBy: {
                id: sort
            },
            where: {
                userId: userId,
            }
        })
        return results
    }

    const findAllByUserId = (userId, sort) => {
        const results = prisma.sportsFacility.findMany({
            orderBy: {
                id: sort
            },
            where: {
                userId: userId,
            }
        })
        return results
    }

    const findById = (id) => {
        const results = prisma.sportsFacility.findUnique({
            where: {
                id: id
            },
        })

        return results
    }

    const findAllPaginated = (sort,skip, limit) => {
        
        const results = prisma.sportsFacility.findMany({
            skip: skip,
            take: limit,
            orderBy: {
                id: sort
            }
        })
        return results
    }


    const findAll = (sort) => {
        const results = prisma.sportsFacility.findMany({
            orderBy: {
                id: sort
            }
        })
        return results
    }

    return {
        findAllByUserId, 
        findAllByUserIdPaginated,
        findAllPaginated,
        findAll,
        findById,
    };
}