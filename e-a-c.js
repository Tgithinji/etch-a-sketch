const container  = document.querySelector('#container');
const customBtn = document.querySelector('.prompt');
const eraserBtn = document.querySelector('.eraser');
const rgbBtn = document.querySelector('.rgb');


// function to create a number of divs
function makeGrid(cols) {
    container.setAttribute('style', `grid-template-rows: repeat(${cols}, 2fr); 
    grid-template-columns: repeat(${cols}, 2fr);`);
    for (let i = 0; i < (cols * cols); i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        changeColor('black', `1px solid white`);
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

eraserBtn.addEventListener('click', () => {
    changeColor('white', `1px solid black`);
})

customBtn.addEventListener('click', customGrid);
window.onload = () => {
    makeGrid(16);
};

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