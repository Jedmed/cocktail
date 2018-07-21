///// DEPENDENCIES /////
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/cocktails';
const session = require('express-session');

///// MIDDLEWARE /////
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static('public'));

///// PORT /////
const port = process.env.PORT || 3000;

app.get('/app', (req, res)=>{
    if(req.session.currentUser){
        res.json(req.session.currentUser);
    } else {
        res.status(401).json({
            status: 401,
            message: 'not logged in'
        });
    }
})

// CONTROLLERS
const cocktailsController = require('./controllers/cocktailController.js');
app.use('/cocktails', cocktailsController);
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);


///// LISTENER /////
app.listen(port, () => {
  console.log('Listening on port:', port);
})

///// CONNECTIONS /////
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.on('open', () => {
	console.log('connected to mongoose!!!!!!!!');
});
