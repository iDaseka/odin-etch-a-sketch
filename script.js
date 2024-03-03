const container = document.querySelector('.container');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let gridSize = prompt('Enter grid size');
    if (gridSize < 100){
        container.innerHTML = '';
        createGrid(gridSize);
    }
})

function createGrid(size){
    for (let i = 0; i < size; i++){
        const newRow = document.createElement('div');
        newRow.classList.add('rows');
    
        for (let j = 0; j < size; j++){
            const newCol = document.createElement('div');
            newCol.classList.add('columns');
            newCol.addEventListener('mouseover', () => {
                newCol.classList.add('hover');
            });
            newRow.appendChild(newCol);
        }
        container.appendChild(newRow);
    }
}

createGrid(16);