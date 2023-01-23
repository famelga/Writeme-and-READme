const inquirer = require('inquirer');
const fs = require('fs');
// const { generate } = require("rxjs");
// const { title } = require("process");

const readMe = `
# Your Project Title

## Description 

${description}


## Table of Contents (Optional)

${Contents}
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${installation}

## Usage 

${usage}

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:`

// ```md
// ![alt text](assets/images/screenshot.png)
// ```


// ## Credits

// ${credits}


// ## License

// ${license} [https://choosealicense.com/](https://choosealicense.com/)


// ---

// 🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

// Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Features

// If your project has a lot of features, consider adding a heading called "Features" and listing them there.

// ## Contributing

// If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

// ## Tests

// Go the extra mile and write tests for your application. Then provide examples on how to run them.

// ---

// © 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.`;


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
        console.log(answer.contents);
        console.log(answer.installation);
        console.log(answer.usage);
        console.log(answer.credits);
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

// fs.writeFile(readMe);
// console.log(writeReadMe);
// console.log(readMe);
writeReadMe();