console.log("Game script loaded");
const grid = document.getElementById('grid-container');

//function to create grid layout
function createGridLayout(size) {

    const containerSize = 640; // size of the container in pixels
    const cellSize = containerSize / size; // calculate cell size based on grid size
    grid.style.width = `${containerSize}px`; // set grid width
    grid.style.height = `${containerSize}px`; // set grid height

    // for loop to create grid
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div'); // create a div for each cell
        cell.classList.add('grid-cell'); 

        // set cell dimensions
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        // Add event listener for hover effect
        cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
        });

        grid.appendChild(cell); // append cell to grid container
    }
}
const defaultSize = 16;
createGridLayout(defaultSize);

// Add button to change grid size

const button = document.createElement('button');
button.textContent = 'Grid Size';
button.id = 'grid-size-button';
document.body.insertBefore(button, grid);

button.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (max 100):");
    newSize = parseInt(newSize);

    if (newSize && newSize > 0 && newSize <= 100) {
        // Clear existing grid
        grid.innerHTML = '';
        // Create new grid with specified size
        createGridLayout(newSize);
    } else {
        alert("Invalid size! Please enter a number between 1 and 100.");
    }
});