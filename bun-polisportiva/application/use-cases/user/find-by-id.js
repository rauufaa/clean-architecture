import { ResponseError } from "../../../src/exceptions/response-error"

export default async function findById(id, userRepository, addressRepository) {
    try {
        const user = await userRepository.findById(id)
        if (!user) throw new ResponseError(404, "USER_NOT_FOUND", "Not found", "User is not found")
        const address = user.addressId !== null
            ? await addressRepository.findById(id)
            : null
        // if (!address) throw new ResponseError(404, "User not found")
        return { user, address }
    } catch (error) {
        throw error
    }

}