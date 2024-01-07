//Global consts 
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const app = express();
const PORT  = process.env.PORT || 3001; 

//This imports the middleware 
app.use = (clog);
//Allows for parsing json and URLencoded form data
app.use(express.kson());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);
app.use(express.static('public'));