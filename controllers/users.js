const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

// index route
router.get('/:username', (req, res) => {
	User.find({}, (err, foundCocktail) => {
		res.json(foundCocktail);
	});
});

// put route for user saved My Cocktails
router.put('/:username', (req, res) => {
	User.create(req.body, (err, addedCocktail) => {
		res.json(addedCocktail);
	});
});

// create user
router.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser)=>{
        res.status(201).json({
        	status: 201,
        	message: "user created"
        });
    });
});

// delete route
router.delete('/:id', (req, res)=>{
    User.findByIdAndRemove(req.params.id, (err, deletedCocktail)=>{
        res.json(deletedCocktail);
    });
});

// put route for user saved My Cocktails
// router.post('/:username', (req, res) => {
// 	User.create(req.body, (err, addedCocktail) => {
// 		res.json(addedCocktail);
// 	});
// });

module.exports = router;
