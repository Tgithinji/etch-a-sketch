const container  = document.querySelector('#container');
const customBtn = document.querySelector('.prompt');

// function to create a number of divs
function makeGrid(cols) {
    container.setAttribute('style', `grid-template-rows: repeat(${cols}, 2fr); 
    grid-template-columns: repeat(${cols}, 2fr);`);
    for (let i = 0; i < (cols * cols); i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
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

customBtn.addEventListener('click', customGrid);
window.onload = () => {
    makeGrid(16);
};