const express = require('express');
const router = express.Router();
const Cocktails = require('../models/cocktails.js');

// index route
// router.get('/', (req, res) => {
// 	Cocktails.find({}, (err, foundCocktail) => {
// 		res.json(foundCocktail);
// 	});
// });

router.get('/', (req, res) => {
	res.send("hello");
})

module.exports = router;
