'use strict';
//server.js

//modules
var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

//port setting
var port = 5000;

//connecting to db
require('./database');

//set the static files location /public/img -> /img for users
app.use('/', express.static('public'));
app.use(parser.json());

//routes
app.use('/api', router);

//start app
app.listen(port, function() {
	console.log('App is listening on port: ' + port);
});
