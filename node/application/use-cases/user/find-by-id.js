import { DomainError } from "../../../src/domain/error/domain-error.js"

export default async function findById(id, userRepository, addressRepository) {
    try {
        const user = await userRepository.findById(id)
        if (!user) throw new DomainError(404, "USER_NOT_FOUND", "Not found", "User is not found")

        const address = user.addressId !== null
            ? await addressRepository.findById(id)
            : null

        return { user, address }
    } catch (error) {
        throw error
    }

}