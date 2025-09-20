
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

export const getUserSchema = {
    headers: headersJsonSchema,
    params: paramsJsonSchema,
}