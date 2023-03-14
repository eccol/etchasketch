const container = document.querySelector('.container');
document.querySelector('#start').addEventListener('click', createGrid);

// Create grid

function createGrid() {
  const gridSize = prompt("What size grid? 1-100");

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
    }
    container.appendChild(row);
  }

  // Respond to hover
  const squares = document.querySelectorAll('.square');
  squares.forEach((sq) => sq.addEventListener('mouseenter', lightUp));

}





function lightUp(e) {
  // 'hovered' class in CSS adds the effect
  e.target.classList.add('hovered');
}