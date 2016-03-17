'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongdb://localhost/test-db', function(err) {
	if (err) {
		console.log('Failed connecting to MongoDB!');
	} else {
		console.log('Successfully connected to MongoDB!');
	}
});
