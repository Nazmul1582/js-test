// select dom elements
const input = document.getElementById("input");
const msg = document.getElementById("message");
const checkBtn = document.getElementById("check");
const playAgainBtn = document.getElementById("playAgain");

// intial value
let userInput = "";
let message = "";
numGenerator(); // initial random number

function numGenerator() {
  return (randomNum = Math.floor(Math.random() * 20) + 1);
}

// change random number
playAgainBtn.addEventListener("click", () => {
  numGenerator();
  userInput = "";
  msg.innerHTML = "";
});

// take user input
input.addEventListener("change", (e) => {
  return (userInput = e.target.value);
});

// check your number is correct or not
checkBtn.addEventListener("click", checking);

// checking function
function checking() {
  if (userInput !== "") {
    if (userInput > randomNum) {
      message = "You guessed too high";
      msg.style.color = "red";
    } else if (userInput < randomNum) {
      message = "You guessed too low";
      msg.style.color = "red";
    } else {
      message = "Congratulation! You've won.";
      msg.style.color = "green";
    }
  } else {
    message = "";
  }
  msg.innerHTML = message;
  input.value = "";
  userInput = "";
}
