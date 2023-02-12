const container  = document.querySelector('#container');
const customBtn = document.querySelector('.prompt');
const eraserBtn = document.querySelector('.eraser');
const rgbBtn = document.querySelector('.rgb');
const clearBtn = document.querySelector('.clear');
const colorBtn = document.querySelector('#color-picker');
const input = document.querySelector('#slider');
const color = document.getElementById('color-picker');

// function to create a number of divs
function makeGrid(cols) {
    container.setAttribute('style', `grid-template-rows: repeat(${cols}, 2fr); 
    grid-template-columns: repeat(${cols}, 2fr);`);
    for (let i = 0; i < (cols * cols); i++) {
        const div = document.createElement('div');
        container.appendChild(div);        
    }
}

// function to delete previous div before creating a new grid
function removeGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

// function that takes a user choice and creates custom grid
function customGrid() {
    let cols = input.value;
    console.log(cols);
    removeGrid();  
    makeGrid(cols);
    changeColor(color.value, `1px solid #edf5e1`)
}

// function to add color to grid cells
function changeColor(colorA, border) {
    const gridCells = document.querySelectorAll('#container>div');    
    gridCells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.addEventListener('mouseover', () => {
                cell.setAttribute('style', `background-color: ${colorA}; border: ${border}`);
            });
        })
    })
}

// function to get random Color
function randomColor() {
    let letters = '0123456789ABCDEF';
    let randomColor = '#';
    for(let i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * letters.length)];
    }
    return randomColor;
}

window.addEventListener('load', () => {
    let border = `1px solid #edf5e1`;
    
    makeGrid(input.value)
    changeColor(color.value, border);
})

// function to clear all colors from the grid
clearBtn.addEventListener('click', () => {
    const gridCells = document.querySelectorAll('#container>div');
    gridCells.forEach(cell => {
        cell.setAttribute('style', 'background-color: #edf5e1; border: 1px solid black;');
    })
})

colorBtn.addEventListener('input', () => {
    newColor = color.value;
    let border = `1px solid black`;
    if (newColor === 'rgb(0,0,0)') border = '1px solid #edf5e1';
    changeColor(newColor, border)
})

eraserBtn.addEventListener('click', () => {
    changeColor('#edf5e1', `1px solid black`);
})

customBtn.addEventListener('click', customGrid);


rgbBtn.addEventListener('click', () => {
    
    const gridCells = document.querySelectorAll('#container>div');    
    gridCells.forEach(cell => {
        let color = randomColor();
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', `background-color: ${color}; border: none`);
        })
    })
    
})

input.addEventListener('click', () => {
    customBtn.textContent = `${input.value} x ${input.value}`;
})