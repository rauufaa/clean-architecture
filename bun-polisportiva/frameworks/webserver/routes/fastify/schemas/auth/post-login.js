const bodyJsonSchema = {
    type: "object",
    required: ['email', 'password'],
    properties: {
        email: {
            type: "string"
        },
        password: {
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


export const postLoginSchema = {
    body: bodyJsonSchema,
    headers: headersJsonSchema,
}