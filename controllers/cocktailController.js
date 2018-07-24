const express = require('express');
const router = express.Router();
const Cocktails = require('../models/cocktails.js');

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