//Global consts 
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const app = express();
const PORT  = process.env.PORT || 3001; 

//This imports the middleware 
app.use = (clog);
//Allows for parsing json and URLencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);
app.use(express.static('public'));

//Get route for the landing page
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

//get route for the notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);
