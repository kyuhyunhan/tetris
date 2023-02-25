export const makeButtons = (app: HTMLDivElement) => {
  const buttons = document.createElement("div");

  const startButton = document.createElement("button");
  const endButton = document.createElement("button");
  const resetButton = document.createElement("button");

  startButton.innerHTML = "START";
  endButton.innerHTML = "END";
  resetButton.innerHTML = "RESET";

  startButton.addEventListener("click", () => {
    startGame();
    console.log(this);
  });
  endButton.addEventListener("click", () => {});
  resetButton.addEventListener("click", () => {});

  buttons.appendChild(startButton);
  buttons.appendChild(endButton);
  buttons.appendChild(resetButton);
  app.appendChild(buttons);
};

const startGame = () => {};
