# Pixel Art Maker Project

## Table of Contents

* [Instructions](#instructions)
* [Progress](#progress)
* [Feedback](#feedback)

## Instructions

To get started, open `designs.js` and start building out the app's functionality.

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Progress

Choosing a color from the color selector and clicking on a grid square causes that grid square (and only that square) to change color.

Event listeners are properly added to the grid squares (and not to the border or the table itself)

If there are already colored squares in the grid, clicking the Submit button clears them out.


## Feedback

**Entering whole numbers in the "Height" and "Width" fields, and submitting the form, causes an empty grid to appear on the page.**
Your code needs to handle the form's submission event. Right now you are intercepting the form submission by attaching a click event listener to the form. So the form never gets submitted. You need to listen for a submit event instead of a click event. This is why right now your makeGrid function is being called whenever the user clicks on an element in the form. Your function should only be called when the user clicks the submit button. You should not be creating a grid when the user is interacting with the input boxes.


**Code is correctly indented, uses descriptive variable names for long-lived variables, and has descriptive comments.**
You need to add descriptive comments to your code.
You also have a couple indentation issues. You can use a tool such as https://beautifier.io/ to correctly indent your code.

**Open the Developer Tools console tab, then create a grid and color some squares in it. You shouldn't see any error messages.**
There is still an error:
designs.js:15 Uncaught TypeError: Cannot read property 'backgroundColor' of undefined
    at HTMLTableCellElement.<anonymous> (designs.js:15)
