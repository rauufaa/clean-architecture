import prisma from "../connection.js"

export default function sportsFieldRepository() {

    const findById = (id) => {
        const results = prisma.sportsField.findUnique({
            where: {
                id: id
            },
        })

        return results
    }

    const findAllByUserIdSportNamePaginated = (userId, sort, sportName, skip, limit) => {
        const results = prisma.sportsField.findMany({
            skip: skip,
            take: limit,
            orderBy: {
                id: sort
            },
            where: {
                userId: userId,
                sport: sportName
            }
        })
        return results
    }

    const findAllByUserIdPaginated = (userId, sort, skip, limit) => {
        const results = prisma.sportsField.findMany({
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

    const findAllBySportNamePaginated = (sportName, sort, skip, limit) => {
        const results = prisma.sportsField.findMany({
            skip: skip,
            take: limit,
            orderBy: {
                id: sort
            },
            where: {
                sport: sportName
            }
        })
        return results
    }

    const findAllByUserIdSportName = (userId, sportName, sort) => {
        const results = prisma.sportsField.findMany({
            orderBy: {
                id: sort
            },
            where: {
                userId: userId,
                sport: sportName
            }
        })
        return results
    }

    const findAllByUserId = (userId, sort) => {
        const results = prisma.sportsField.findMany({
            orderBy: {
                id: sort
            },
            where: {
                userId: userId,
            }
        })
        return results
    }

    const findAllBySportName = (sportName, sort) => {
        const results = prisma.sportsField.findMany({
            orderBy: {
                id: sort
            },
            where: {
                sport: sportName
            }
        })
        return results
    }

    const findAll = (sort) => {
        const results = prisma.sportsField.findMany({
            orderBy: {
                id: sort
            },
        })
        return results
    }

    const findAllPaginated = (sort, skip, limit) => {
        const results = prisma.sportsField.findMany({
            orderBy: {
                id: sort
            },
            skip: skip,
            take: limit,
        })
        return results
    }

    const findAllBySportsFacilityId = (sportsFacilityId, sort) => {
        const results = prisma.sportsField.findMany({
            orderBy: {
                id: sort
            },
            where: {
                sportFacilityId: sportsFacilityId
            }
        })
        return results
    }


    const add = (sportsField) => {
        const results = prisma.sportsField.create({
            data: {

                
                name: sportsField.getName(),
                sport: sportsField.getSport(),
                isIndoor: sportsField.getIsIndoor(),
                
                soccerFieldType: sportsField.getSoccerFieldType(),
                tennisFieldType: sportsField.getTennisFieldType(),
                priceListId: sportsField.getPriceListId(),
                userId: sportsField.getUserId(),
                sportsFacilityId: sportsField.getSportsFacilityId(),
            }
        })
        return results

    }



    return {
        findAllByUserIdSportNamePaginated,
        findAllByUserIdPaginated,
        findAllBySportNamePaginated,
        findAllByUserIdSportName,
        findAllByUserId,
        findAllBySportName,
        findAll,
        findAllPaginated,
        findAllBySportsFacilityId,
        findById,
        add,
    };
}