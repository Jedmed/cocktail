const express = require('express');
const router = express.Router();
const Cocktails = require('../models/cocktails.js');

// index route
router.get('/', (req, res) => {
	Cocktails.find({}, (err, foundCocktail) => {
		res.json(foundCocktail);
	});
});

// create route
router.post('/', (req, res) => {
	Cocktails.create(req.body, (err, addedCocktail) => {
		res.json(addedCocktail);
	});
});

// delete route
router.delete('/:id', (req, res)=>{
    Cocktails.findByIdAndRemove(req.params.id, (err, deletedCocktail)=>{
        res.json(deletedCocktail);
    });
});

// update route
router.put('/:id', (req, res)=>{
    Cocktails.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCocktail)=>{
        res.json(updatedCocktail);
    });
});


module.exports = router;
