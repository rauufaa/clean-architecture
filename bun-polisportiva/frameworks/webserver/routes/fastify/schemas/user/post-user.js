
const bodySchema = {
    type: "object",
    required: ['username', 'password', 'address', 'email', 'firstName', 'lastName', 'fiscalCode'],
    properties: {
        username: {
            type: "string"
        },   
        password: {
            type: "string"
        },   
        address: {
            type: "object",
            required: ['state', 'city', 'streetName', 'streetNumber', 'postcode'],
            properties: {
                state: {
                    type: "string"
                },
                city: {
                    type: "string"
                },
                streetName: {
                    type: "string"
                },
                streetNumber: {
                    type: "string"
                },
                postcode: {
                    type: "string"
                }
            }
        },
        email: {
            type: "string"
        }, 
        firstName: {
            type: "string"
        }, 
        lastName: {
            type: "string"
        }, 
        fiscalCode: {
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
    type: 'object',
    required: ['content-type'],
    properties: {
        'content-type': {
            type: 'string',
            const: 'application/json'
        }
    }
}

const querySchema = {
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

export const postUserSchema = {
    headers: headersSchema,
    body: bodySchema,
}