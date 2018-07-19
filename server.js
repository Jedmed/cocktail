///// DEPENDENCIES /////
const express = require('express');
const app = express();
const mongoose = require('mongoose');

///// PORT /////
const port = 3000;

///// LISTENER /////
app.listen(port, () => {
  console.log('Listening on port:', port);
})

///// CONNECTIONS /////
mongoose.connect('mongodb://localhost:27017/cocktails', {useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
    console.log('Connected to mongoose...');
});
