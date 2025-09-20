const bodySchema = {
    type: "object",
    required: [''],
    properties: {
        status: {
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

export const putReservationStatusSchema = {
    headers: headersSchema,
    params: paramsSchema,
    body: bodySchema,
}