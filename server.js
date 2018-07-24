///// DEPENDENCIES /////
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/cocktails';
const session = require('express-session');

///// PORT /////
const port = process.env.PORT || 3000;

///// MIDDLEWARE /////
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret:'feedmeseymour',
    resave: false,
    saveUninitialized: false
}));

// CONTROLLERS
const cocktailsController = require('./controllers/cocktails.js');
app.use('/cocktails', cocktailsController);
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);
const userController = require('./controllers/users.js')
app.use('/users', userController);

///// LISTENER /////
app.listen(port, () => {
  console.log('Listening on port:', port);
})

///// CONNECTIONS /////
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.on('open', () => {
	console.log('connected to mongoose!!!!!!!!');
});
