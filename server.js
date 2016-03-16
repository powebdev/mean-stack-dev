//server.js

//modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//config files
var db = require('./config/db');

//port setting
var port = process.env.PORT || 5000;

//set the static files location /public/img -> /img for users
app.use(express.static(__dirname = '/public'));

//routes
require('./app/routes')(app);

debugger; //the debugger flag acts as a break point for debugging

//start app
app.listen(port);

//message indicating start of app
console.log('App is listening on port: ' + port);

//expose app
exports = module.exports = app;
