var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var movieSchema = new Schema({
	title:  String,
	duration: Number,
	rating: Number,
	synopsis: String,
	genrelist: [String],
	photos: [Number]
});

module.exports = mongoose.model("Movie", movieSchema);