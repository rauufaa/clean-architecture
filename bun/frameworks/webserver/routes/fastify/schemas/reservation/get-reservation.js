
const paramsSchema = {
    type: "object",
    required: ['id'],
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

export const getReservationSchema = {
    headers: headersSchema,
    params: paramsSchema,
}