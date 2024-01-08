const fs = require('fs');
const util = require('util');

//reads file
const readFromFile = util.promisify(fs.readFile);

//writes data to the JSON file given the destination and content provided 
/** 
* @param {string} destination
* @param {object} content
* @param {void} nothing
*/

const writeToFile = (destination, content) =>
    fs.writeToFile(destination, JSON.stringify(content, null, 4), (err) =>
      err ? console.error(err) : console.info(`\n Data written to ${destination}`)
    );


//Reads data from a given a file and append some content 
/** 
* @param {string} destination
* @param {object} content
* @param {void} nothing
*/

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

//exports object that will be called upon in other file 
module.exports = {readFromFile, writeToFile, readAndAppend};