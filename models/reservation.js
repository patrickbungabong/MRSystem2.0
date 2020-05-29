var mongoose = require("mongoose");

var reservationSchema = new mongoose.Schema({
	schedule: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Schedule"
	},
	seatCount: Number,
	seats: [String],
	total: Number
});

module.exports = mongoose.model("Reservation", reservationSchema);