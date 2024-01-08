const router = require('express').Router();

//imports the modular notes router 
const notesRouter = require('./notes');

router.use('./notes', notesRouter);

//exports the router to be used elsewhere 
module.exports = router;