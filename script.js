// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * Picks.length);
  return Picks[randomChoice];
}

let Picks = ['Rock', 'Paper', 'Scissors'];
console.log(getComputerChoice());


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  let score = 0;
  // return the result of score based on if you won, drew, or lost
  if (playerChoice == computerChoice){
    score = 0;
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    score = 1;
  } else {
    score = -1;
  }
  // All situations where human draws, set `score` to 0
  // All situations where human wins, set `score` to 1
  // Otherwise human loses (aka set score to -1)
  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const ResultElement = document.getElementById('result');
  if (score == -1){
      ResultElement.innerText = 'YOU LOSE!'
  }else if (score == 0){
      ResultElement.innerText = 'Its a DRAW!'
  }else {
      ResultElement.innerText = 'YOU WINNNN!'
  }
  const choicesElement = document.getElementById('hands');
  choicesElement.innerText = `Player Choice: ${playerChoice} vs. Computer Choice: ${computerChoice}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  // Get computer's choice
  const computerChoice = getComputerChoice();
  
  // Get score
  const score = getResult(playerChoice, computerChoice);
  
  // Show result on screen
  showResult(score, playerChoice, computerChoice);  
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelectorAll to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton');

  // Adds an on click event listener to each RPS button and every time you click it, 
  // it calls the onClickRPS function with the RPS button that was last clicked
  rpsButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Call onClickRPS function with the selected button's value
      onClickRPS(button.value);
    });
  });

  // Add click event listener to end game button
  const endGameButton = document.getElementById('endGameButton');
  endGameButton.addEventListener('click', endGame);
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  // Clear result text
  document.getElementById('result').textContent = '';

  // Clear player and computer choice text
  document.getElementById('hands').textContent = '';
}

playGame();
