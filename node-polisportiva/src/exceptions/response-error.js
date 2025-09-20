class ResponseError extends Error {
    constructor(statusCode, code, error,message) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.error = error;
        // this.status = "FAILED";
    }

    reconstruct() {
        return {
            statusCode: this.statusCode,
            code: this.code,
            error: this.error,
            message: this.message
        }
    }
}

export {
    ResponseError
}