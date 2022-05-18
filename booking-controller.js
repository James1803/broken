const BookingNotFoundError = require("../errors/booking-not-found-error");
const Booking = require("../model/booking");

const bookings = [new Booking({ adult: 1, child: 4, firstName: "bob", lastName: "sam", email: "jaajjajaja", concession: "yayayaya"})];

module.exports = {

    getBookings: async (req, res, next) => {
        const bookings = await Booking.find({});
        res.status(200).json(bookings);
    },

    getBookingById: async (req, res, next) => {
        const id = req.params.id;
        const booking = await Booking.findById(id);
        if (booking) {
            res.status(200).json(booking);
            return;
        }
        next(new BookingNotFoundError(id));
    },

    createBooking: async (req, res, next) => {
        const booking = new Booking(req.body);
        try {
            await booking.save();
            res.status(200).json(booking);
        } catch (error) {
            next(error);
        }
    },


    updateBooking: async (req, res, next) => {
        const id = req.params.id;
        const updates = req.body;
        const booking = await Booking.updateOne({_id: id}, updates);

        if (booking) {
            res.status(200).json(booking);
            return;
        }
        next(new BookingNotFoundError(id));
    },


    deleteBooking: async (req, res, next) => {
        const booking = bookings.find((booking) => booking.id === Number(req.params.id))

        if(!booking) {
            return res.status(404).json({success: false, msg: `the booking does not exist`})
        }
        const newBookings = bookings.filter((booking) => booking.id !== Number(req.params.id))
        return res.status(200).json({success: true, data: newBookings})
    }
}