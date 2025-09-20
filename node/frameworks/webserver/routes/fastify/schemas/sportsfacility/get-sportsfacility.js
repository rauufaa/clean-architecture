
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


export const getSportsFacilitySchema = {
    headers: headersSchema,
    params: paramsSchema,
}