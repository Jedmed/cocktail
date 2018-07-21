// Get Dependencies
const mongoose = require('mongoose');

// Cocktail Schema
const cocktailSchema = new mongoose.Schema({
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
	measure8: String,
});

// Export Schema
const Cocktails = mongoose.model('Cocktails', cocktailSchema);

module.exports = Cocktails;
