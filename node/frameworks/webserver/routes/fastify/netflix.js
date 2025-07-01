import netflixControllerFastify from "../../../../adapters/controllers/netflix-controller"
import showRepository from "../../../../application/repositories/show-repository"

import showPostgresRepository from "../../../database/postgres/repositories/show-repository"
import { deleteNetflixSchema } from "./schemas/netflix-delete"

import { getNetflixSchema } from "./schemas/netflix-get"
import { pagingNetflixSchema } from "./schemas/netflix-get-paging"

import { postNetflixSchema } from "./schemas/netflix-post"
import { putNetflixSchema } from "./schemas/netflix-put"

export default function netflixRoutes(fastify) {
    const controller = netflixControllerFastify(showRepository, showPostgresRepository)
    fastify.get('/netflix/shows/:showId', { schema: getNetflixSchema }, async (request, reply) => {

        const result = await controller.getShow(request.params)
        console.log(result)
        // reply.code(statusCode).send(result)
        reply.code(200).send({ ok: "SUCCED ", data: result })

    })

    fastify.get("/netflix/shows", { schema: pagingNetflixSchema }, async (request, reply) => {

        // const { statusCode, result } = await controller.getProduct(request.body)
        // reply.code(statusCode).send(result)
        const result = await controller.getPagingShow(request.query)
        // console.log(result)
        reply.code(200).send({ ok: "SUCCED", data:result})

    })

    fastify.post("/netflix/shows", {schema: postNetflixSchema}, async (request, reply) => {

        // const { statusCode, result } = await controller.getProduct(request.body)
        // reply.code(statusCode).send(result)
        const result = await controller.postShow(request.body)
        reply.code(200).send({ ok: "SUCCED", data:result})

    })

    fastify.put("/netflix/shows/:showId", {schema: putNetflixSchema}, async (request, reply) => {

        // const { statusCode, result } = await controller.getProduct(request.body)
        // reply.code(statusCode).send(result)
        const result = await controller.putShow(request.params,request.body)
        reply.code(200).send({ ok: "SUCCED", data:result})

    })

    fastify.delete("/netflix/shows/:showId", {schema: deleteNetflixSchema}, async (request, reply) => {

        // const { statusCode, result } = await controller.getProduct(request.body)
        // reply.code(statusCode).send(result)
        const result = await controller.deleteShow(request.params)
        reply.code(200).send({ ok: "SUCCED", data:result})

    })
}