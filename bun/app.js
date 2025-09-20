import http from "http";
import serverConfig from "./frameworks/webserver/server.js";
import routes from "./frameworks/webserver/routes/index.js";
import Fastify from 'fastify';
import fastifyConfig from "./frameworks/webserver/fastify.js";
import prisma from "./frameworks/database/postgres/connection.js";
import dotenv from "dotenv";
import config from "./config/config.js";

dotenv.config()

// const serverFactory = (handler, opts) => {
//     const server = http.createServer((req, res) => {
//         handler(req, res)
//     })

//     return server
// }

const fastify = Fastify({
    // serverFactory,
    logger: true,
});


await fastifyConfig(fastify)
await routes(fastify, config)

async function startApp() {
    try {
        await serverConfig(fastify, fastify.server, prisma, config).startServer();
        console.log('Successfully booted!');
    } catch (error) {
        console.error('Error saat booting atau menjalankan server:');
        console.error(error);
    }
}

startApp();


