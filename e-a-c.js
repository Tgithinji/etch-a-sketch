const container  = document.querySelector('#container');
const customBtn = document.querySelector('.prompt');
const eraserBtn = document.querySelector('.eraser');
const rgbBtn = document.querySelector('.rgb');
const clearBtn = document.querySelector('.clear');

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
    let cols;
    do {
        cols = parseInt(prompt('Enter a number between 1-100', ''))
    } while (cols < 1 || cols > 100 || (isNaN(cols)));
    removeGrid();  
    makeGrid(cols);
    changeColor('black', `1px solid #edf5e1`)
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
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

window.addEventListener('load', () => {
    let border = `1px solid #edf5e1`;
    let color = 'black';
    makeGrid(16)
    changeColor(color, border);
})

// function to clear all colors from the grid
clearBtn.addEventListener('click', () => {
    const gridCells = document.querySelectorAll('#container>div');
    gridCells.forEach(cell => {
        cell.setAttribute('style', 'background-color: #edf5e1; border: 1px solid black;');
    })
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
            cell.addEventListener('mouseover', () => {
                cell.setAttribute('style', `background-color: ${color}; border: none`);
            });
        })
    })
    
})