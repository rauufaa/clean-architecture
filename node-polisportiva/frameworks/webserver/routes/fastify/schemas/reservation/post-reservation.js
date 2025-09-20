const bodyJsonSchema = {
    type: "object",
    required: [''],
    properties: {
        sportsFieldId: {
            type: "string"
        },
        ownerId: {
            type: "string"
        },
        dateRange: {
            type: "object",
            properties: {
                startDate: {
                    type: "string"
                },
                endDate: {
                    type: "string"
                }
            }
        },
        
    }
}
const paramsJsonSchema = {
    type: "object",
    properties: {
        showId: {
            type: "string"
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

export const postReservationSchema = {
    headers: headersJsonSchema,
    params: paramsJsonSchema,
    body: bodyJsonSchema,
    query: queryStringJsonSchema,
}