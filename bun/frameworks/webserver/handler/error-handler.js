import { DomainError } from "../../../src/domain/error/domain-error.js"

export default function errorHandler(error, request, reply) {
    if (error instanceof DomainError) {
        // Log error
        this.log.error(error)
        // Send error response
        reply.status(error.statusCode).send(error.reconstruct()
        )
    } else {
        // Fastify will use parent error handler to handle this
        reply.send(error)
    }
}