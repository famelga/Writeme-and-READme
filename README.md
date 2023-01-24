# Writeme-and-READme

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Node JS    | [https://developer.mozilla.org/en-US/docs/Glossary/Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js) | 
| npm     | [https://www.npmjs.com/](https://www.npmjs.com/)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 

## Description 

Using the inquirer and fs npm packages, users are able to generate a README>md documents usign just a command-line application.

This application allows for users to answer a series of questions to fill in the necessary of the README template. The inquirer package (version 8.2.4) consists of prompts relating to the README. Responses to these prompts then substitute the placeholders (${}) in the template literal that houses the README template. The writeFile method of File system (fs) creates a new README.md document based on the responses and template literal.  

## Portfolio Example

Since the scheduler displays the hours in 12-hour notation, I had also labeled the div ids in the same way. For example, 1pm was "id='hour 1'. However, this created complexity when I was trying to format the hours on the the scheduler to match the current hour. 


```function gatherCrit() {
<div id="hour-1" class="row time-block">
```

By switching the 24-hour notation on the the id only, rather than the scheduler, I was able to write code gave the id an number type that could be compared with the current hour through dayjs. 

```
<div id="hour-13" class="row time-block">
```


## Usage 

Visit website.


![Scheduler Homepage](./assets/images/Work%20Day%20Scheduler.jpeg)

## Learning Points 

This project helped me understand the importance of scopes among tags and their relationships to one another. While I have been able to identify parent, child, and sibling tags, I did not have a fully understanding of their relevance to writing code if I could simply refer the the tag, id, or class name. 

Since I may want to target code tags, ids, and classes that have varying names in similar ways, calling on the nearest parent, child, or siblings will address them at once.

## Author Info

### Fayven Amelga 


* [Portfolio](https://famelga.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/fayven-amelga-b09b17b6/)
* [Github](https://github.com/famelga)



## Credits

Fayven Amelga


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
