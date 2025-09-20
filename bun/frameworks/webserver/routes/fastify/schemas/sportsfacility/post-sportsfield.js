
const bodySchema = {
    type: "object",
    required: ['name', 'sport', 'isIndoor', 'priceList'],
    properties: {
        name: {
            type: "string"
        },   
        sport: {
            type: "string"
        },   
        isIndoor: {
            type: "boolean"
        },   
        priceList: {
            type: "object",
            required: ['pricePerHour'],
            properties: {
                pricePerHour: {
                    type: "number"
                }
            }
        },
        
    }
}
const paramsSchema = {
    type: "object",
    required: ['id'],
    properties: {
        id: {
            type: "number"
        },
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

export const postSportsFieldSchema = {
    headers: headersSchema,
    params: paramsSchema,
    body: bodySchema,
}