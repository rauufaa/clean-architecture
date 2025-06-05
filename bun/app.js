import serverConfig from "./frameworks/webserver/server";

import routes from "./frameworks/webserver/routes";

import Fastify from 'fastify';
import fastifyConfig from "./frameworks/webserver/fastify";
import prisma from "./frameworks/database/postgres/connection";


const fastify = Fastify({
    logger: true,
});

await fastifyConfig(fastify)
routes(fastify)

async function startApp() {
    try {
        await serverConfig(fastify, fastify.server, prisma).startServer();
        console.log('Successfully booted!');
    } catch (error) {
        console.error('Error saat booting atau menjalankan server:');
        console.error(error);
    }
}

startApp();


