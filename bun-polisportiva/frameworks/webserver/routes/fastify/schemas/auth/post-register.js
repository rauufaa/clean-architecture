const bodyJsonSchema = {
    type: "object",
    required: [''],
    properties: {
        username: {
            type: "string"
        },   
        password: {
            type: "string"
        },   
        address: {
            type: "object",
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
                postCode: {
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

const headersJsonSchema = {
    type: "object",
    required: ["Content-type"],
    properties: {
        "Content-type": {
            type: "string"
        }
    }
}


export const postRegisterSchema = {
    body: bodyJsonSchema,
    headers: headersJsonSchema,
}