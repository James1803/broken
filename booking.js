const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    adult: {
        type: Number,
        required: true
    },
    child: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    concession: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('booking', bookingSchema);