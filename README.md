# Writeme-and-READme

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 

## Description 

[Visit the Deployed Site](https://famelga.github.io/Work-Day-Scheduler/)

This calendar application follows the 9-5 work schedule, and allows the user to add events. The application is also color-coded based on current hour. 

Most of the html was completed, with the exception of 12pm-5pm. Using the same formatting as the previous time-blocks, I added code to create the missing hours. While the scheduler displays the hours in a 12-hour format, the div ids were labeled using the format of a 24-clock. I did this so that I could use less than, greater than, and equal to in the if/else conditional statements that were used to assign color to the textarea boxes. I also had to remove the "past", "present", "future" classes from the parent div tags so that it would not override JQuery.

I used the for each function instead of a for loop because the for each iterates through every section and passes a callback function. With the time-block class, the function added either a past, present, or future class based on the relationship between the 24-clock div ids and current hour, which was pulled from dayjs. 

Additionally, I was able to pull the current date using dayjs format, and using the text property to display the date from JavaScript to the HTML.

![Scheduler Page](./assets/images/Work%20Day%20Scheduler.gif)

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
