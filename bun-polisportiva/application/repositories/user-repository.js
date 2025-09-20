export default function userRepository(repository) {
    const findById = (id) => repository.findById(id)
    const findByEmail = (email) => repository.findByEmail(email)
    const findByUsername = (username) => repository.findByUsername(username)
    const add = (user) => repository.add(user);

    return {
        findById,
        findByEmail,
        findByUsername,
        add,
    };
}