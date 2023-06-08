console.log("JSOK");

// Prendiamo gli elementi dal DOM

const difficultyElement = document.getElementById("difficulty");
const buttonElement = document.querySelector("button");
const gridElement = document.getElementById("grid");
const scoreElement = document.getElementById("score");

// Funzioni

const createCell = () => {
  const cell = document.createElement("div");

  //   Difficulty easy

  const difficulty = parseInt(difficultyElement.value);

  if (difficulty === 10) {
    cell.classList = "cell easy";
    return cell;
  }

  //   Difficulty Medium

  if (difficulty === 9) {
    cell.classList = "cell medium";
    return cell;
  }

  //   Difficulty Hard

  if (difficulty === 7) {
    cell.classList = "cell hard";
    return cell;
  }
};

// Al click del bottone Play

buttonElement.addEventListener("click", () => {
  // Row e Cols

  const rows = difficultyElement.value;
  const cols = difficultyElement.value;
  const totalCells = cols * rows;

  // Score

  let score = 0;
  // clean

  scoreElement.innerHTML = " ";
  gridElement.innerHTML = "";

  // Cell

  for (let i = 1; i <= totalCells; i++) {
    const cell = createCell();
    cell.innerText = i;

    // Al click della cella

    cell.addEventListener("click", () => {
      if (!cell.classList.contains("clicked")) {
        cell.classList.add("clicked");
        console.log(i);
        score++;
        scoreElement.innerText = score;
      }
    });
    gridElement.appendChild(cell);
  }
});
