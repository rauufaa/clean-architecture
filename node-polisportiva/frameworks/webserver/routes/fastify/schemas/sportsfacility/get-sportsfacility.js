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

export const getSportsFacilitySchema = {
    headers: headersJsonSchema,
    params: paramsJsonSchema,
}