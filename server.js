//Global consts 
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const app = express();
const PORT  = process.env.PORT || 3001; 

//This imports the middleware 
app.use = (clog);
