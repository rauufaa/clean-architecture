const bodySchema = {
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

const headersSchema = {
    type: "object",
    required: ["content-type"],
    properties: {
        "content-type": {
            type: "string"
        }
    }
}


export const postLoginSchema = {
    body: bodySchema,
    headers: headersSchema,
}