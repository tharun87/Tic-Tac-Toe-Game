let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#new-game");
let game = document.querySelector(".game");
let msgContainer = document.querySelector(".msg-container");
let heading = document.querySelector("#heading");
let result = document.querySelector("#msg");
let turn0 = true;
let count = 0;
let winner = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    msgContainer.classList.add("hide");
    heading.classList.remove("hide");
    game.classList.remove("hide");
    count = 0;
}

const disbleBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}

resetbtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", () => {
    resetGame();
    resetbtn.classList.remove("hide");
});

const showWinner = (winner) =>{
    result.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disbleBoxes();
    resetbtn.classList.add("hide");
    game.classList.add("hide");
    heading.classList.add("hide");
}

const draw = () => {
    showWinner();
    result.innerText = "Draw!";
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
    console.log("box was clicked");
    //Player 0
    if (turn0){
        box.innerText = "X";
        turn0 = false
    }
    //Player 1
    else{
        box.innerText = "O";
        turn0 = true;
    }
    count++;
    box.disabled = true;
    console.log(count);
    checkWinner();
    if(count===9){
        if(!winner){
            draw();
        }
    }
    });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    let winner = false;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner", pos1); 
        winner=true;
        showWinner(pos1);
      }
    }
  }
};
