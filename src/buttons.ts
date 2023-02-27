export const makeButtons = (app: HTMLDivElement) => {
  const buttons = document.createElement("div");

  const startButton = document.createElement("button");
  const endButton = document.createElement("button");
  const resetButton = document.createElement("button");

  startButton.innerHTML = "START";
  endButton.innerHTML = "END";
  resetButton.innerHTML = "RESET";

  // callback으로 function(){}을 사용해야 내부에서 this 참조가 가능함
  startButton.addEventListener("click", () => {
    startGame();
    startButton.style.display = "none";
  });
  endButton.addEventListener("click", () => {
    endGame();
    startButton.style.display = "block";
  });
  resetButton.addEventListener("click", () => {
    resetGame();
    startButton.style.display = "block";
  });

  buttons.appendChild(startButton);
  buttons.appendChild(endButton);
  buttons.appendChild(resetButton);
  app.appendChild(buttons);
};

// responsible for drawing and dropping the tetris pieces
const startGame = () => {};

const endGame = () => {};

const resetGame = () => {};

const createMatrix = (width: number, height: number): number[][] => {
  const matrix = [];

  while (height--) {
    matrix.push(new Array(width).fill(0));
  }
  return matrix;
};
