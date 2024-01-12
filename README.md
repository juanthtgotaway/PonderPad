# PonderPad

![Github license](https://shields.io/badge/license-MIT-orange)
https://ponderpad-dd01cc8d291c.herokuapp.com/notes
![alt text](./images/Landing%20page.png)

## Description
The motive behind this program was to help create a website that would let me write down notes or task that I would need to complete. While working on this project there was a lot of things I learned along the way. Some being the following: 
* How to link files using routes. This was very important as the sourcing of these routes affected how and where the user would be directed. At first I was having issues using the wildcard but got that fixed by correcting the notes.js file. 
* How to write information into the db.json file. This was important as this is what note the user would input. At first the issue was not having an ID properly issue so having to correct that UUID was a minor set back. Then after launching the website everything looked good until the user would 'save' the note. This caused a '\n' to be inserted which the tutor and I could not find it until we restarted my server entirely and that seemed to fix it. 
![alt text](./images/Notes%20Open.png)


## Table of Contents
-[Descriptions](#Descriptions)
-[Installation](#Installation)
-[Usage](#Usage)
-[Credits](#Credits)
-[Tests](#Tests)
-[License](#License)
-[Questions](##Questions)

## Installation
In order to install this project you will have to clone the repository: 
    1. Create a place where you will want to store all this information 
    2. Once there open GitBash
    3. Clone this repository into the file you will have this stored in
            enter following: git@github.com:juanthtgotaway/PonderPad.git
    4. Press enter to create your local clone

![alt text](./images/New%20note%20being%20added.png)


## Usage
This can be used to write down ideas or tasks 

## Credits
Corrections made by Tutor: 
"fs.writeToFile" -> "fs.writeFile"
"notes.get('/notes',(req, res)" -> "notes.get('/',(req, res)"
"notes.post('/notes'," -> "notes.post('/',"
removed clog file

Other Resources:
https://stackoverflow.com/questions/42879269/vscode-not-showing-proper-params-in-object
https://expressjs.com/en/guide/using-middleware.html
Using student mini project as help

![alt text](./images/Note%20added.png)



## Tests
N/A
## License
MIT

## Questions
If you have any questions or concerns feel free to reach out via the following:
GitHub:[juanthtgotaway](https://github.com/juanthtgotaway)