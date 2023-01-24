const inquirer = require('inquirer');
const fs = require('fs');
// const { title } = require('process');

function writeReadMe() {
    inquirer
    .prompt([
       { 
        type: "input",
        name: "title",
        message: "What is your project title?",
       },
       { type: 'input',
        name: 'description',
        message: 'Enter the description.',
       },
       { type: 'input',
        name: 'contents',
        message: 'Add a table of contents.',
       },
       { type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
       },
       { type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
       },
       { type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
       },
       { type: 'list',
        name: 'license',
        message: 'Select a license to use.',
        choices: ["MIT License", "GNU AGPLv3", "Mozilla Public License 2.0"],
       },
    ])
    .then ((answer) => {
        
        console.log(answer.title);
        console.log(answer.description);
        console.table(answer.contents);
        console.log(answer.installation);
        console.log(answer.usage);
        console.log(answer.credits);
        console.log(answer.license);

if (answer.license === "Mit License") {
    return answer.license.value = `MIT License

    Copyright (c) [year] [fullname]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`
}

        var readMe = (
`# ${answer.title}

 ## Description 
        
${answer.description}
        
 ## Table of Contents
        
${answer.contents}

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
        
## Installation
        
${answer.installation}
        
## Usage 
        
${answer.usage}
        
## Credits
        
${answer.credits}
        
## License
        
${answer.license}`
   )
   fs.writeFile('templateREADME.md', readMe, (err) => {
    if (err) throw err;
    console.log('templateREADME.md created');
   })
    })

}


// function renderLicenseBadge(license) {

// }

// function renderLicenseLink() {

// }

// function renderLicenseSection() {

// }

// function generateMarkdown() {
//     return `#${data.title}`
// }

// module.exports = generateMarkdown;

// console.log(readMe);
writeReadMe();