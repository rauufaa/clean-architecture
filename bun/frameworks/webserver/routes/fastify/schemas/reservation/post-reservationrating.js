const bodySchema = {
    type: "object",
    required: ['rating', 'description'],
    properties: {
        rating: {
            type: "number"
        },
        description: {
            type: "string"
        },
    }
}
const paramsSchema = {
    type: "object",
    properties: {
        id: {
            type: "number"
        }
    }
}

const headersSchema = {
    type: "object",
    required: ["content-type", "authorization"],
    properties: {
        "content-type": {
            type: "string"
        },
        "authorization": {
            type: "string"
        }
    }
}


export const postReservationRatingSchema = {
    headers: headersSchema,
    params: paramsSchema,
    body: bodySchema,
}