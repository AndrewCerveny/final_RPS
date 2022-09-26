// document QuerySelectors
var classicGameArea = document.querySelector('#classicGame');
var injusticeGameArea = document.querySelector('#superGame');
var hiddenForm = document.querySelector('#fighterForm');
var hiddenHeroButton = document.querySelector('#hiddenHero');
var hiddenVillainButton = document.querySelector('#hiddenVillain');
var changeGameButton = document.querySelector('#gameSwitch');
var gameAnnouncer = document.querySelector('#changingPhrase')
var userWinsCounter = document.querySelector('#userWins');
var computerWinsCounter = document.querySelector('#computerWins');
var characterButtons = document.querySelector("#charactersContainer");
var userFighterDisplay = document.querySelector('#UserFighterExhibit');
var computerFighterDisplay = document.querySelector('#CompFighterExhibit');
var winnerDisplay = document.querySelector('#champDisplay')
var newGame = document.querySelector('#reset')














// Event Listeners
changeGameButton.addEventListener('click', backHome)
classicGameArea.addEventListener('click', oldSchool);
injusticeGameArea.addEventListener('click',royal);
characterButtons.addEventListener('click', function(event) {
user.takesTurn(event)
computer.takesTurn();
saysShoot()
});
newGame.addEventListener('click',reset)




// functions
function oldSchool() {
  hiddenForm.classList.remove('hidden');
  classicGameArea.classList.add('hidden');
  game.checkingGameType('classic');
  injusticeGameArea.classList.add('hidden');
}

function royal() {
  oldSchool();
  displayCharacters();
  game.checkingGameType('injustice');

}

function displayCharacters(){
hiddenHeroButton.classList.remove('hidden')
hiddenVillainButton.classList.remove('hidden')
}

function computerPlayer(gameFightersArr) {
  var randomIndex = Math.floor(Math.random() * gameFightersArr.length)
  var computerFighter = gameFightersArr[randomIndex]
  return computerFighter
};

function saysShoot() {
 game.winConditions(user.chosenFighter, computer.chosenFighter);
 updateUserScore()
 updateComputerScore()
};

function gameRef(winner) {
  winnerDisplay.classList.remove('hidden')
  if(winner === user.chosenFighter ) {
    gameAnnouncer.innerText = `Winner: ${user.name}`
    winnerDisplay.innerText = `😄 ${user.chosenFighter} destroyed ${computer.chosenFighter}!😄`
  }else if(winner === computer.chosenFighter) {
    gameAnnouncer.innerText = `Winner: ${computer.name}`
    winnerDisplay.innerText = `🤬 ${computer.chosenFighter} disembowled ${user.chosenFighter}!🤬`
  }else {
    gameAnnouncer.innerText = `Winner: NONE `
    winnerDisplay.innerText = `🩻 ${user.chosenFighter} and ${computer.chosenFighter} had equal damage! 🩻 `
  }
}

function updateUserScore() {
userWinsCounter.textContent = `${game.player1Wins}`
}

function updateComputerScore() {
computerWinsCounter.textContent = `${game.player2Wins}`;
}

function matchUsersChoice() {
  if(user.chosenFighter === 'rock') {
    userFighterDisplay.innerText = '🗿'
  }else if (user.chosenFighter === 'paper') {
    userFighterDisplay.innerText = '📄'
  }else if(user.chosenFighter === 'scissors') {
    userFighterDisplay.innerText = '✂️'
  }else if (user.chosenFighter === 'hero') {
    userFighterDisplay.innerText = '🦸🏽‍♂️'
  }else if (user.chosenFighter === 'villain') {
      userFighterDisplay.innerText = '🦹🏼‍♂️'
  }else{
    userFighterDisplay.innerText = '🛑'

  }
}

function matchComputerChoice() {
  if(computer.chosenFighter === 'rock') {
    computerFighterDisplay.innerText = '🗿'
  }else if (computer.chosenFighter === 'paper') {
    computerFighterDisplay.innerText = '📄'
  }else if(computer.chosenFighter === 'scissors') {
    computerFighterDisplay.innerText = '✂️'
  }else if (computer.chosenFighter === 'hero') {
    computerFighterDisplay.innerText = '🦸🏽‍♂️'
  }else if (computer.chosenFighter === 'villain') {
    computerFighterDisplay.innerText = '🦹🏼‍♂️'
  }else{
    computerFighterDisplay.innerText = '🛑'
  }
}

function backHome() {
  hiddenForm.classList.add('hidden');
  classicGameArea.classList.remove('hidden');
  injusticeGameArea.classList.remove('hidden');
};

function reset() {
  game.player1Wins = 0;
  game.player2Wins = 0;
  userFighterDisplay.innerText = 'Fighter';
  computerFighterDisplay.innerText = 'Fighter';
}





//  variables
var classicGameFighters = ['paper','scissors','rock']
var superGameFighters =['paper','scissors','rock','villain','hero'];
var user = new Player({name:'user', token:'👨🏽‍💻', wins:0});
var computer = new Player({name:'computer', token:'💻',wins:0});
var game = new Game(user, computer);
