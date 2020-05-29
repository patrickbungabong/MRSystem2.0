var mongoose = require("mongoose");

var cinemaSchema = new mongoose.Schema({
	cinema: Number,
	price: Number,
});

module.exports = mongoose.model("Cinema", cinemaSchema);