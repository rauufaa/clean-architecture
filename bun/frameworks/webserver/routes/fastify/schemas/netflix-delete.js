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
        "content-type": {
            type: "string"
        }
    }
}
export const deleteNetflixSchema = {
    headers: headersJsonSchema,
    params: paramsJsonSchema
}