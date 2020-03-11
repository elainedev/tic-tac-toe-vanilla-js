const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

const cellElements = document.querySelectorAll("[data-cell]");
let circleTurn;

cellElements.forEach(cell => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  // console.log(cell, e.target, e);

  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  // place mark
  placeMark(cell, currentClass);

  // check for win

  // check for draw

  // swap turns
  swapTurns();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}
