//Global consts that import required modules and packages to run app
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const app = express();
//defines the environment variable port or if one inst generated 3001 is used
const PORT  = process.env.PORT || 3001; 

//This imports the middleware 
app.use(clog);
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

//listens for the port that will be generated back when ran 
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);