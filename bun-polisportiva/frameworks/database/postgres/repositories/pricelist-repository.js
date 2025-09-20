// import connectionPool from "../connection";
import prisma from "../connection"

export default function priceListRepository() {

    const findById = (id) => {
        const results = prisma.priceList.findUnique({
            where: {
                id
            },
        })

        return results

    }

    const add = (price) => {
        const results = prisma.priceList.create({
            data: {
                pricePerHour: price.getPricePerHour()
            }
        })
        return results

    }

    

    return {
        findById,
        add,
    }
}