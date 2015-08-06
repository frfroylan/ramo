var express = require('express');
var router = express.Router();
var moviesModel = require("../models/movies");

/* GET /movies/ listing. */
router.get('/', function(req, res, next) {

/* PUlls the raw json format of the movie and sends it to the /movie 
  var firstMovie = moviesModel.findOne(function (err, movies) {
    if(err) { console.log(err); }
    return res.json(200, movies);
  });

*/


// Able to pull first movie and present specific fields to 
//	movies.ejs 
/*	moviesModel.findOne(function(err,movies){

	if(err) res.json(err);
	return res.render('movies', {movies: movies});
	});


//Able to console log the movies that have a price of over 10000
//	now need to figure out how to send save each document into an array and display them.
	moviesModel.find({}).where('Price').gt(10000).exec(function(err,movies){

	if(err) throw err;
	console.log(movies);
	});
*/
	

	moviesModel.find({}).where('Price').gt(10000).exec(function(err,movies){

	if(err) throw err;
	res.render('movies', {movies:movies});
	});

});

module.exports = router;
