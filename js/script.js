console.log("JSOK");

// Prendiamo gli elementi dal DOM

const difficultyElement = document.getElementById("difficulty");
const buttonElement = document.querySelector("button");
const gridElement = document.getElementById("grid");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");

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

// Funzione GenerateBombs

const generateBombs = (max, bombNumber) => {
  const randomNumber = (max) => Math.floor(Math.random() * max) + 1;

  const bombs = [];

  while (bombs.length < bombNumber) {
    const bomb = randomNumber(max);
    if (!bombs.includes(bomb)) bombs.push(bomb);
  }
  return bombs;
};

// Funzione EndGame

const endGame = (bombList) => {
  // Recupero tutte le celle create
  const allCells = gridElement.querySelectorAll("div");
  // Creo un ciclo for che mi mostri tutte le celle cliccate e quelle con le bombe
  for (let i = 0; i < allCells.length; i++) {
    const singleCell = allCells[i];
    singleCell.classList.add("clicked");
    const cellNumber = parseInt(singleCell.innerText);
    if (bombList.includes(cellNumber)) {
      singleCell.classList.add("bomb");
    }
  }
};

// Al click del bottone Play

buttonElement.addEventListener("click", () => {
  // Row e Cols

  const rows = parseInt(difficultyElement.value);
  const cols = parseInt(difficultyElement.value);
  const totalCells = cols * rows;

  // Dichiarazioni

  let score = 0;
  let bombs = 16;
  let isEndGame = false;

  // Clean

  scoreElement.innerHTML = " ";
  gridElement.innerHTML = "";
  messageElement.innerText = "";

  // Generats Bombs

  const bomb = generateBombs(totalCells, bombs);
  console.log(bomb);

  // Cell

  for (let i = 1; i <= totalCells; i++) {
    const cell = createCell();
    cell.innerText = i;

    // Al click della cella

    cell.addEventListener("click", () => {
      if (isEndGame) return;
      if (!cell.classList.contains("clicked")) {
        cell.classList.add("clicked");
        console.log(i);

        // Creo un ciclo che controlla l'arrey con le bombe

        for (let i = 0; i < totalCells; i++) {
          if (bomb[i] == cell.innerText) {
            cell.classList.add("bomb");
            messageElement.innerText = `La partita è terminata!`;
            isEndGame = true;
            endGame(bomb);
          }
        }
        scoreElement.innerText = ++score;
        if (score === totalCells - bombs) {
          messageElement.innerText = `Hai vinto! Hai raggiunto il punteggio massimo`;
        }
      }
    });
    gridElement.appendChild(cell);
  }
});
