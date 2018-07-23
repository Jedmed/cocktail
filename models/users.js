const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    username: String,
    password: String,
    // name: { type: String, required: true},
    name: String,
	img: String,
	instructions: String,
	// ingredients
	ingredient1: String,
	ingredient2: String,
	ingredient3: String,
	ingredient4: String,
	ingredient5: String,
	ingredient6: String,
	ingredient7: String,
	ingredient8: String,
	// measure
	measure1: String,
	measure2: String,
	measure3: String,
	measure4: String,
	measure5: String,
	measure6: String,
	measure7: String,
	measure8: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;