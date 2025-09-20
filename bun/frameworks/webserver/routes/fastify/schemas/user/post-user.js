
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


export const postUserSchema = {
    headers: headersSchema,
    body: bodySchema,
}