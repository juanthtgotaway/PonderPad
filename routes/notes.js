const notes = require('express').Router();
const {v4: uuidv4} = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

//GET route for retrieving the notes data 
notes.get('/',(req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    const { title, text } = req.body;
    
    if (title && text) {
        const newNote ={
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    }   else {
        res.json("Error in saving note");
    }
});

//exports object
module.exports = notes;