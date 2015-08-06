var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({

	_id: String,
	DVD_Title: String,
	Studio: String,
	Released: String,
	Status: String,
	Sound: Number,
	Versions: String,
	Price: Number,
	Rating: String,
	Year: String, //Some values have 'VAR'
	Genre: String,
	Aspect: String,
	UPC: String,
	DVD_ReleaseDate: String,
	ID: Number,
	Timestamp: String

});


module.exports = mongoose.model('dvds', MovieSchema);

