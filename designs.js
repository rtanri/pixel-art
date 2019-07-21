const color = document.getElementById('colorPicker');
const canvas = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;

//TODO: to document your code with comments. At bare mininum your functions.

function makeGrid(height, width) {
    for (let n = 0; n < height; n++) {
        let row = canvas.insertRow(n);
        for (let m = 0; m < width; m++) {
            let cell = row.insertCell(m);

            let one = cell.style.backgroundColor;
            cell.addEventListener('click', function(e){
/*
This is causing the error:

designs.js:15 Uncaught TypeError: Cannot read property 'backgroundColor' of undefined
    at HTMLTableCellElement.<anonymous> (designs.js:15)
This is because cell.value is undefined.

Perhaps you meant:

if (cell.style.backgroundColor === color.value){
However, depending on your browser, this may always evaluate to false. For example, I added the following code to understand why this if statement doesn't work:

console.log(cell.style.backgroundColor);
console.log(color.value);
And in Chrome I got the following results when using black:

rgb(0, 0, 0)
#000000
As you can see, cell.style.backgroundColor is returning an rgb value, while color.value is returning a hex value. So this if statement will always evaluate to false. Besides, if this if statement did work the way you wanted it to, then it would always evaluate to true, since you assigned cell.style.backgroundColor = color.value; on the previous line.

You could convert the rgb value to a hex value, but you would need to write your own function to do so. You can check out the following discussions:

https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
Personally, I think that would be overly complicated, and error prone if different browsers handle these values differently. Instead, this is the approach I would take:

Assign the current value of cell.style.backgroundColor; to a temporary variable.
Assign the value of color.value to cell.style.backgroundColor;
you already do this step on line 14, so nothing to add to your code here.
Check if the updated value for cell.style.backgroundColor; is the same value stored in your temporary variable.
you can modify your if statement on line 15 to do this.
If the updated value is the same as the old value, then remove the backgroundColor style for the cell.
See the comment on line 16 to see how to do this.
*/
                cell.style.backgroundColor = color.value;
/*
This will return the error:

Uncaught TypeError: Cannot read property 'remove' of undefined
    at HTMLTableCellElement.<anonymous> (designs.js:18)
cell.backgroundColor is undefined. Perhaps you meant cell.style.backgroundColor.

However, if you try:

cell.style.backgroundColor.remove();
... you will get the following error:

Uncaught TypeError: cell.style.backgroundColor.remove is not a function
    at HTMLTableCellElement.<anonymous>
Instead, just set the backgroundColor to a blank string. e.g.:

cell.style.backgroundColor = "";
See:

https://stackoverflow.com/questions/40380676/javascript-remove-background-color-and-opacity
*/
                if (one === cell.style.backgroundColor){
                    cell.style.backgroundColor = "";
                }
                console.log(cell.style.backgroundColor);
                console.log(color.value);
/*
If I fix the error on line 15, then I get the following error:

designs.js:18 Uncaught ReferenceError: newTable is not defined
    at HTMLTableCellElement.<anonymous>
You use newTable here without ever defining it first. I'm not
sure what you are trying to do here. You can probably
just cut this line of code. --newTable.innerHTML = null;
*/

            });
        }
    }
}

makeGrid(height, width);
sizePicker.addEventListener('click', function(e){
/*
You need to handle the form's submit event rather than
the click event. This is intercepting the form submission,
 so it never gets submitted. This is also why makeGrid
 gets called whenever any element in the form is
 clicked. Your grid should only be created after the
 submit button is clicked. It should not be called if
 the user clicks on an input box.
*/
    e.preventDefault();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    canvas.firstElementChild.remove();
    makeGrid(height, width);
});
