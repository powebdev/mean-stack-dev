// app/routes.js

// importing database model
var Model = require('./models/model');

module.exports = function(app){
	//server routes
	//usuallt the api calls and authentication routes

	//api call
	app.get('/api/nerds', function(req, res){
		Model.find(function(err, data){
			if(err)
				res.send(err);
			res.json(data);
		});
	});
	
	//frontend routes
	app.get('/', function(req, res){
		res.sendfile('./public/views/index.html');
	});
};
