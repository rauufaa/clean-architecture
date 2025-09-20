import authTokenHandler from "./handler/authtoken-handler.js";
import errorHandler from "./handler/error-handler.js";
import onRequest from "./hook/on-request.js";

export default async function fastifyConfig(fastify) {
    // await fastify.register(import("@fastify/compress"))
    // await fastify.register(import("@fastify/cors"))

    // fastify.addHook('onRequest', authTokenHandler);
    fastify.setErrorHandler(errorHandler)
}