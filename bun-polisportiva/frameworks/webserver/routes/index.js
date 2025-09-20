import authRoute from "./fastify/auth";
import reservationRoute from "./fastify/reservation";
import sportsFacilityRoute from "./fastify/sports-facility";
import sportsFieldRoute from "./fastify/sports-field";
import userRoute from "./fastify/user";
// import netflixRoutes from "./fastify/netflix";
// import reservationRoutes from "./fastify/reservation";
// import sportsFacilityRoutes from "./fastify/sports-facility";
// import sportsFieldRoutes from "./fastify/sports-field";


export default function routes(app) {
    app.register(authRoute, { prefix: "/api/auth" })
    app.register(reservationRoute, {prefix : "/api/reservations"})
    app.register(sportsFacilityRoute, {prefix : "/api/sports-facilities"})
    app.register(sportsFieldRoute, {prefix : "/api/sports-fields"})
    
    app.register(userRoute, {prefix : "/api/users"})
}