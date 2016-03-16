// app/models/model.js
// use mongoose module
var mongoose = require('mongoose');

// defining model
// module.exports allows other files to use this
module.exports = mongoose.model('Table', {
	name: {type: String, default: ''}
});
