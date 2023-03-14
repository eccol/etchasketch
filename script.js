const GRID_WIDTH = 4;
const GRID_HEIGHT = 4

const container = document.querySelector('.container');

for (let i = 0; i < GRID_HEIGHT; i++) {
  for (let j = 0; j < GRID_WIDTH; j++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    console.log(`Created square ${i} ${j}`)
  }
}