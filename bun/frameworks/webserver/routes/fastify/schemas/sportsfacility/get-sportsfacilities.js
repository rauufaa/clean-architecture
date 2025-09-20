const headersSchema = {
    type: "object",
    required: ["content-type", "authorization"],
    properties: {
        "content-type": {
            type: "string"
        },
        "authorization": {
            type: "string"
        }
    }
}

const querySchema = {
    type: "object",
    properties: {
        filter_by_owner_id: {
            type: "number"
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
    headers: headersSchema,
    query: querySchema,
}