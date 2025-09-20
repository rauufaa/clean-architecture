
const bodyJsonSchema = {
    type: "object",
    required: [''],
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
            properties: {
                pricePerHour: {
                    type: "string"
                }
            }
        },
        
    }
}
const paramsJsonSchema = {
    type: "object",
    properties: {
        id: {
            type: "number"
        }
    }
}

const headersJsonSchema = {
    type: "object",
    required: ["Content-type"],
    properties: {
        "Content-type": {
            type: "string"
        }
    }
}

const queryStringJsonSchema = {
    type: "object",
    properties: {
        filter_by_owner_id: {
            type: "number"
        },
        filter_by_sport: {
            type: "string"
        },
        page: {
            type: "number"
        },
        limit: {
            type: "number"
        }
    }
}

export const postSportsFieldSchema = {
    headers: headersJsonSchema,
    params: paramsJsonSchema,
    body: bodyJsonSchema,
    query: queryStringJsonSchema,
}