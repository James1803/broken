module.exports = class BookingNotFoundError extends Error {
    constructor(id) {
        super(`booking with id ${id} was not found.`)
        this.id = id;
    }
}