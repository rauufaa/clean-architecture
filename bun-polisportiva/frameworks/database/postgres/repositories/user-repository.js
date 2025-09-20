import prisma from "../connection"

export default function userRepository() {

    const findById = (id) => {
        const results = prisma.user.findUnique({
            where: {
                id: id
            },
        })

        return results
    }

    const findByEmail = (email) => {
        const result = prisma.user.findFirst({
            where: {
                email: email
            }
        })

        return result
    }

    const findByUsername = (username) => {
        const result = prisma.user.findFirst({
            where: {
                username: username
            }
        })

        return result
    }

    const add = (user) => {
        const results = prisma.user.create({
            data: {
                username: user.getUsername(),
                password: user.getPassword(),
                email: user.getEmail(),
                firstName: user.getFirstName(),
                lastName: user.getLastName(),
                fiscalCode: user.getFiscalCode(),
                addressId: user.getAddressId(), 
            }
        })
        return results
    }

    

    return {
        findById,
        findByEmail,
        findByUsername,
        add,
    }
}