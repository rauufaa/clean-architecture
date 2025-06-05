// import connectionPool from "../connection";
import { PrismaClient } from "../../../../src/generated/prisma";

export default function showRepository() {
    // const {pool} = connectionPool().getPool()
    const prisma = new PrismaClient()

    const findById = async (params) => {
        try {
            // const results = await pool.query(query, params)
            const results = await prisma.netflix_shows.findUnique({
                where: {
                    show_id: params
                }
            })

            return results
        } catch (error) {
            throw new Error(error);
        }
    }

    const findAllPaging = async (search, skip, limit) => {
        try {
            
            const results = await prisma.netflix_shows.findMany({
                skip: skip,
                take: limit,
                where: {
                    title: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                orderBy: {
                    release_year: "desc"
                }
            })
            
            return results
        } catch (error) {
            throw new Error(error);
        }
    }

    const add = async (show) => {
        try {
            const results = await prisma.netflix_shows.create({
                data: {
                    type: show.getType(),
                    title: show.getTitle(),
                    director: show.getDirector(),
                    cast_members: show.getCastMembers(),
                    country: show.getCountry(),
                    date_added: show.getDateAdded(),
                    release_year: show.getReleaseYear(),
                    rating: show.getRating(),
                    duration: show.getDuration(),
                    listed_in: show.getListedIn(),
                    description: show.getDescription()
                }
            })
            return results
        } catch (error) {
            throw new Error(error);
        }
    }

    const updateById = async (show) => {
        try {
            const results = await prisma.netflix_shows.update({
                data: {
                    type: show.getType(),
                    title: show.getTitle(),
                    director: show.getDirector(),
                    cast_members: show.getCastMembers(),
                    country: show.getCountry(),
                    date_added: show.getDateAdded(),
                    release_year: show.getReleaseYear(),
                    rating: show.getRating(),
                    duration: show.getDuration(),
                    listed_in: show.getListedIn(),
                    description: show.getDescription()
                },
                where: {
                    show_id: show.getShowId()
                }
            })
            return results
        } catch (error) {
            throw new Error(error);
        }
    }

    const deleteById = async (showId) => {
        try {
            // const results = await pool.query(query, params)
            const results = await prisma.netflix_shows.update({
                data: {
                    deleted_at:new Intl.DateTimeFormat('en-CA').format(new Date())
                },
                where: {
                    show_id: showId
                }
            })
            return results
        } catch (error) {
            throw new Error(error);
        }
    }

    return {
        findById,
        findAllPaging,
        add,
        updateById,
        deleteById
    }
}