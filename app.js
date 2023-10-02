const p1 = document.querySelector("#p1Button");
const p2 = document.querySelector("#p2Button");

let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");

const resetButton = document.querySelector("#reset")
let winningScoreButton = document.querySelector("#playTo")

let winningScore = 3;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;



winningScoreButton.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
})

p1.addEventListener("click", function () {

    if (!isGameOver) {
        p1Score++;

        if (p1Score === winningScore) {
            isGameOver = true
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
            p1Button.disabled =true;
            p2Button.disabled =true;
        
        }
        p1Display.textContent = p1Score;
    }

})


p2.addEventListener("click", function () {

    if (!isGameOver) {
        p2Score++;

        if (p2Score === winningScore) {
            isGameOver = true
            p1Display.classList.add("loser");
            p2Display.classList.add("winner");
            p1Button.disabled =true;
            p2Button.disabled =true;
        }
        p2Display.textContent = p2Score;
    }

})

resetButton.addEventListener("click", reset)

function reset() {

    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner" ,"loser");
    p2Display.classList.remove("winner" ,"loser");

    p1Button.disabled =false;
    p2Button.disabled =false;


}








