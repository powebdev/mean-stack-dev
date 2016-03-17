'use strict';

var express = require('express');
//require data model here

var router = express.Router();

router.get('/test', function(req, res) {
	//returning json object to indicate functioning router
	res.json({test: 'api router GET moethod is working'});
});

module.exports = router;
