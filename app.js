var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Delete if not needed after project
//var fs = require('fs');
//var router = express.Router();
//var favicon = require('serve-favicon');

//Specify all our routes (controllers)
var routes = require('./routes/index');
var movies = require('./routes/movies');

//Assign app to the express framework
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Jumps into our routes
app.use('/', routes);
app.use('/movies', movies);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


/* CONNECTION TO DB */
mongoose.connect('mongodb://localhost:27017/movies');
var db = mongoose.connection;

//Report any errors with the DB to the console
db.on('error', console.error.bind(console,'connection error:'));

//Lets us know that the DB connected successfully 
//  That is all! 
db.once('open', function(callback){
  console.log("Connection to DB made");
});


/*load all fiels in models dir
Might delete check if needed after project!!

fs.readdirSync(__dirname + '/models').forEach(function(filename){
  if(~filename.indexOf('.js')) require(__dirname + '/models/' + filename);
});*/


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
