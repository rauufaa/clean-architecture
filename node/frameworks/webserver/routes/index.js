import authTokenHandler from "../handler/authtoken-handler.js";
import authRoute from "./fastify/auth.js";
import reservationRoute from "./fastify/reservation.js";
import sportsFacilityRoute from "./fastify/sports-facility.js";
import sportsFieldRoute from "./fastify/sports-field.js";
import userRoute from "./fastify/user.js";


export default async function routes(fastify, config) {
    const authHandler = authTokenHandler(config)
    await fastify.register(authRoute, { prefix: "/api/auth" , config: config, authHandler})
    await fastify.register(reservationRoute, { prefix: "/api/reservations", authHandler })
    await fastify.register(sportsFacilityRoute, { prefix: "/api/sports-facilities", authHandler })
    await fastify.register(sportsFieldRoute, { prefix: "/api/sports-fields", authHandler })
    await fastify.register(userRoute, { prefix: "/api/users", authHandler })
    
    fastify.ready(err => {
        if (err) throw err;
        console.log(fastify.printRoutes());
    });
}