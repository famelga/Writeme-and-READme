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
    ])
    .then ((answer) => {
        
        console.log(answer.title);
        console.log(answer.description);
        console.table(answer.contents);
        console.log(answer.installation);
        console.log(answer.usage);
        console.log(answer.credits);

        var readMe = (`
        

        ${answer.title}
        ## Description 
        
        ${answer.description}
        
        
        ## Table of Contents (Optional)
        
        ${answer.contents}
        * [Installation](answer.installation)
        * [Usage](answer.usage)
        * [Credits](answer.credits)
        * [License](answer.license)
        
        
        ## Installation
        
        ${answer.installation}
        
        ## Usage 
        
        ${answer.usage}`
   )
   fs.writeFile('README.md', readMe, (err) => {
    if (err) throw err;
    console.log('README.md created');
   })
    })

}

// ${} answers to readme template

// fs.writeFile(answers.title) {
//     ${#title}


    // ## Description 
    
    // ${description}
    
    
    // ## Table of Contents (Optional)
    
    // ${Contents}
    // * [Installation](#installation)
    // * [Usage](#usage)
    // * [Credits](#credits)
    // * [License](#license)
    
    
    // ## Installation
    
    // ${installation}
    
    // ## Usage 
    
    // ${usage}'

// }
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

// fs.writeFile(readMe);
// console.log(writeReadMe);
// console.log(readMe);
writeReadMe();