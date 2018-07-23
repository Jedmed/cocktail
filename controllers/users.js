const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

// index route
router.get('/:id', (req, res) => {
	User.find({}, (err, foundCocktail) => {
		res.json(foundCocktail);
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

// put route for user saved My Cocktails
router.put('/:id', (req, res) => {
	User.create(req.body, (err, addedCocktail) => {
		res.json(addedCocktail);
	});
});

module.exports = router;
