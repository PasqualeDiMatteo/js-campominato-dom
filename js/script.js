console.log("JSOK");

// Prendiamo gli elementi dal DOM

const difficultyElement = document.getElementById("difficulty");
const buttonElement = document.querySelector("button");
const gridElement = document.getElementById("grid");
const scoreElement = document.getElementById("score");

// Funzioni

// Funzione CreateCell

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

const generateBombs = (max, bombNumber) => {
  const randomNumber = (max) => Math.floor(Math.random() * max) + 1;

  const bombs = [];

  while (bombs.length < bombNumber) {
    const bomb = randomNumber(max);
    if (!bombs.includes(bomb)) bombs.push(bomb);
  }
  return bombs;
};

// Dichiaro il numero di bombe

let bombs = 16;

// Al click del bottone Play

buttonElement.addEventListener("click", () => {
  // Row e Cols

  const rows = parseInt(difficultyElement.value);
  const cols = parseInt(difficultyElement.value);
  const totalCells = cols * rows;

  // Dichiarazioni
  let score = 0;
  let bombs = 16;

  // clean

  scoreElement.innerHTML = " ";
  gridElement.innerHTML = "";

  // Generats Bombs

  generateBombs(totalCells, bombs);
  console.log(generateBombs(totalCells, bombs));

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
