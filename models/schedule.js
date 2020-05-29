var mongoose = require("mongoose");

var scheduleSchema = new mongoose.Schema({
	movie: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Movie"
	},
	date: Date,
	cinema: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Cinema"
	},
	seats: Number
});

module.exports = mongoose.model("Schedule", scheduleSchema);