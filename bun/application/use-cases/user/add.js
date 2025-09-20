import Address from "../../../src/entities/address.js"
import User from "../../../src/entities/user.js"
import { DomainError } from "../../../src/domain/error/domain-error.js"

export default async function add({
    username,
    password,
    address: {
        state,
        city,
        streetName,
        streetNumber,
        postcode,
    },
    email,
    firstName,
    lastName,
    fiscalCode,
}, userDbRepository, addressDbRepository, authService) {



    try {
        const userEmailFound = await userDbRepository.findByEmail(email)
        if (userEmailFound) throw new DomainError(400, "USER_EMAIL_INVALID", "Bad request", "Email already exist")
        const userUsernameFound = await userDbRepository.findByUsername(username)
        if (userUsernameFound) throw new DomainError(400, "USER_USERNAME_INVALID", "Bad request", "Username already exist")

        const newAddress = new Address({
            state,
            city,
            streetName,
            streetNumber,
            postcode
        })

        const hashedPassword = await authService.encryptPassword(password)

        const addressResult = await addressDbRepository.add(newAddress)

        const newUser = new User({
            username: username,
            password: hashedPassword,
            addressId: addressResult.id,
            email: email,
            firstName: firstName,
            lastName: lastName,
            fiscalCode: fiscalCode
        })

        const userResult = await userDbRepository.add(newUser)

        return { userResult, addressResult }
    } catch (error) {
        throw error
    }
}