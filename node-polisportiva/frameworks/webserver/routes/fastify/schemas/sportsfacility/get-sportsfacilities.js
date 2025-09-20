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
const paramsSchema = {
    type: "object",
    properties: {
        id: {
            type: "number"
        }
    }
}

const headersSchema = {
    type: "object",
    required: ["Content-type"],
    properties: {
        "Content-type": {
            type: "string",
            const: "application/json"
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

export const getSportsFacilitiesSchema = {
    // headers: headersSchema,
    query: querySchema,
}