import errorHandler from "./handler/error-handler.js";
import onRequest from "./hook/on-request.js";

export default async function fastifyConfig(fastify) {
    // await fastify.register(import("@fastify/compress"))
    // await fastify.register(import("@fastify/cors"))

    fastify.addHook('onRequest', onRequest);
    fastify.setErrorHandler(errorHandler)
}