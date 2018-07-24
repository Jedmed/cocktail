const express = require('express');
const router = express.Router();
const Cocktails = require('../models/cocktails.js');

// index route
router.get('/:user', (req, res) => {
	Cocktails.find({user: req.params.user}, (err, foundCocktail) => {
		res.json(foundCocktail);
	});
});

// Create route for user's cocktail
router.post('/', (req, res) => {
	Cocktails.create(req.body, (err, addedCocktail) => {
		res.json(addedCocktail);
	});
});

// delete my cocktail
router.delete('/:id', (req, res) => {
    Cocktails.findByIdAndRemove(req.params.id, (err, deletedCocktail)=>{
        res.json(deletedCocktail);
    });
});

// Update cocktail
router.put('/:id', (req, res) => {
  Cocktails.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCocktail) => {
    res.json(updatedCocktail)
  });
});

module.exports = router;
