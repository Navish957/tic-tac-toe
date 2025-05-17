let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetbtn");
let newGameBtn = document.querySelector("#newGame");
let gameWinner = document.querySelector("#winner");
// turn will be act in alternate manner
let turnO = true; // player_O , player_X

//reset game
const resetGame = () => {
  turnO = true;
  enableBtns();
  gameWinner.style.display = "none";
};

//enable boxes after restart of game
const enableBtns = () => {
  for (const box of boxes) {
   box.disabled = false;
   box.innerText = "";
  }
}

//winning patterns will be stored in 2D- array
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// add eventlistner on each button
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button was clicked");
    if (turnO) {
      //player_O
      box.innerText = "O";
      turnO = false;
    } 
    else 
      {
      //player_X
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

// disable buttons after win
const disableBtns = () => {
   for (const box of boxes) {
    box.disabled = true;
   }
}

// winner text function
const showWinner = (winner) => {
  gameWinner.innerText = `Congratulations, Winner is ${winner}`;
  // alert(`Congratulations, Winner is ${winner}`);
};

// check winner
const checkWinner = () => {
  for (const pattern of winPatterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
  //condition of winning or tie of the game
    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 == posVal2 && posVal2 == posVal3) {
        showWinner(posVal1);
        disableBtns();
        gameWinner.style.display = "block";
        console.log("winner");
      }
    }
  }
};

// add event listener on newgame btn and rest btn
newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);
