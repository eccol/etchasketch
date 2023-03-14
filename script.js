const GRID_WIDTH = 4;
const GRID_HEIGHT = 4

const container = document.querySelector('.container');

// Create grid

for (let i = 0; i < GRID_HEIGHT; i++) {
  for (let j = 0; j < GRID_WIDTH; j++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

// Respond to hover
const squares = document.querySelectorAll('.square');
squares.forEach((sq) => sq.addEventListener('mouseenter', lightUp));

function lightUp(e) {
  // 'hovered' class in CSS adds the effect
  e.target.classList.add('hovered');
}