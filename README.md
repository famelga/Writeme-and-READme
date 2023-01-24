# Writeme-and-READme

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Node JS    | [https://developer.mozilla.org/en-US/docs/Glossary/Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js) | 
| npm     | [https://www.npmjs.com/](https://www.npmjs.com/)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 

## Description 

Using the inquirer and fs npm packages, users are able to generate templateREADME.md documents using just a command-line application.

This application allows for users to answer a series of questions to fill in the necessary of the README template. The inquirer package (version 8.2.4) consists of prompts relating to the README. Responses to these prompts then substitute the placeholders (${}) in the template literal that houses the README template. The writeFile method of File system (fs) creates a new templateREADME.md document based on the responses and template literal.  

## Portfolio Example

Responses to the prompts were traversed from prompt using the name key to target the corressponding with the placeholders. 


```    inquirer
    .prompt([
        { 
            type: "input",
            name: "fullName",
            message: "What is your full name?",
        },
```

The user's name is target using the syntax "answer.fullName" based on their response to the prompt above. 

```
${answer.fullName}
```


## Usage 

Use command-line to generate a templateREADME.md document.

![README Generator](./assets/images/Work%20Day%20Scheduler.jpeg)

## Learning Points 

This project helped me understand how to use the inquirer package to gather data based on user-input. assigning unique names to the "name" keys was essential so that the correct responses were being referenced. 

Also, I become more familiar with using back-ticks to contain template literals. Initially, I was using single-quotes, which resulted in errors and the text not being grouped together. Once I noticed my error, the selected text were uniform-color, symbolizing that the template literals would be functional. 

## Author Info

### Fayven Amelga 


* [Portfolio](https://famelga.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/fayven-amelga-b09b17b6/)
* [Github](https://github.com/famelga)



## Credits

Fayven Amelga

https://shields.io/ 


## License

MIT License

Copyright (c) 2023 Fayven Amelga

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
SOFTWARE.

## Badges

![MIT Badge](https://img.shields.io/badge/license-MIT-blue)

---

© 2023 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
