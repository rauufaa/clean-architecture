import prisma from "../connection.js"
export default function addressRepository() {
    const add = (address) => {
        const results = prisma.address.create({
            data: {
                state: address.getState(),
                city: address.getCity(),
                streetName: address.getStreetName(),
                streetNumber: address.getStreetNumber(),
                postcode: address.getPostcode(),
            }
        })
        return results

    }

    const findById = (id) => {
        const results = prisma.address.findUnique({
            where: {
                id: id
            }
        })
        return results

    }

    return {
        add,
        findById
    }
}