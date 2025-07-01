const bodyJsonSchema = {
    type: "object",
    required: [''],
    properties: {
        type: {
            type: "string"
        },
        title: {
            type: "string"
        },
        director: {
            type: "string"
        },
        castMembers: {
            type: "string"
        },
        country: {
            type: "string"
        },
        dateAdded: {
            type: "string"
        },
        releaseYear: {
            type: "integer"
        },
        rating: {
            type: "string"
        },
        duration: {
            type: "string"
        },
        listedIn: {
            type: "string"
        },
        description: {
            type: "string"
        }
    }
}
const paramsJsonSchema = {
    type: "string",
    properties: "show_id"
}

const headersJsonSchema = {
    type: "object",
    properties: {
        "content-type": {
            type: "string"
        }
    },
    required: ["content-type"],

}

const queryStringJsonSchema = {
    type: "object",
    properties: {
        search: {
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

export const pagingNetflixSchema = {
    headers: headersJsonSchema,
    query: queryStringJsonSchema
}