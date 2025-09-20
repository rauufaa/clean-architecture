
import errorHandler from "./handler/error-handler.js";


export default async function fastifyConfig(fastify) {
    await fastify.register(import("@fastify/compress"))
    await fastify.register(import("@fastify/cors"))

    fastify.setErrorHandler(errorHandler)
}