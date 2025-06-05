import { ResponseError } from "../../../src/exceptions/response-error"

export default function errorHandler(error, request, reply) {
    if (error instanceof ResponseError) {
        // Log error
        this.log.error(error)
        // Send error response
        reply.status(error.status).send({ 
            status: "FAILED",
            message: error.message
        })
    } else {
        // Fastify will use parent error handler to handle this
        reply.send(error)
    }
}