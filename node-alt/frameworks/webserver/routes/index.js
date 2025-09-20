import netflixRoutes from "./fastify/netflix.js";


export default function routes(app) {
    // app.use("/api/v1/product", productRouter(express));
    app.register(netflixRoutes, {prefix : "/api"})
}