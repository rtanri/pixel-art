const color = document.getElementById('colorPicker');
const canvas = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;

function makeGrid(height, width) {
    for (let n = 0; n < height; n++) {
        let row = canvas.insertRow(n);
        for (let m = 0; m < width; m++) {
            let cell = row.insertCell(m);

            cell.addEventListener('click', function(e){
                cell.style.backgroundColor = color.value;
                if (cell.value.backgroundColor === color.value){
                    cell.backgroundColor.remove();
                  }
            newTable.innerHTML = null;
            });
        }
    }
}

makeGrid(height, width);
sizePicker.addEventListener('click', function(e){
    e.preventDefault();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    canvas.firstElementChild.remove();
    makeGrid(height, width);
});
