///// DEPENDENCIES /////
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/cocktails';
 mongoose.connect(mongoUri);

app.use(express.json());
app.use(express.static('public'));

///// PORT /////
const port = 3000;

// CONTROLLERS
const cocktailsController = require('./controllers/cocktailController.js');
app.use('/cocktails', cocktailsController);


///// LISTENER /////
app.listen(port, () => {
  console.log('Listening on port: ', port);
})

///// CONNECTIONS /////
mongoose.connect(mongoUri);
mongoose.connection.on('open', () => {
	console.log('connected to mongoose!!!!!!!!');
});