const bodySchema = {
    type: "object",
    required: ['sportsFieldId', 'ownerId', 'dateRange'],
    properties: {
        sportsFieldId: {
            type: "number"
        },
        ownerId: {
            type: "number"
        },
        dateRange: {
            type: "object",
            required: ['startDate', 'endDate'],
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


export const postReservationSchema = {
    headers: headersSchema,
    body: bodySchema,
}